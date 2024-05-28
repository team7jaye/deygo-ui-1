'use client';
import { useParams } from 'next/navigation';
import React, { useLayoutEffect, useState } from 'react';
import { pageContents } from '../../pageContents';
import AppInnerLayout from '@/components/appInnerLayout';
// import MainActivity from '@/components/activities/MainActivity';
// import MainBar from '@/components/bars/MainBar';
// import MainHotel from '@/components/old/hotels/MainHotel';
// import MainRestuarant from '@/components/old/restaurants/MainRestuarant';
// import MainSupermarket from '@/components/old/supermarkets/MainSupermarket';
import InnerPageContent from '@/components/common/InnerPageContent';
import Loading from '@/app/loading';
import Error from '@/app/error';
import { useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { getBusinessById, getBusinessesByCategory } from '@/api/categories';
import CommonItemList from '@/components/common/CommonItemList';

const sidebars: any[] = [
  // {
  //   name: 'activities',
  //   bar: <MainActivity mx={true} />,
  // },
  // {
  //   name: 'bars',
  //   bar: <MainBar mx={true} />,
  // },
  // {
  //   name: 'hotels',
  //   bar: <MainHotel mx={true} />,
  // },
  // {
  //   name: 'restaurants',
  //   bar: <MainRestuarant mx={true} />,
  // },
  // {
  //   name: 'supermarkets',
  //   bar: <MainSupermarket mx={true} />,
  // },
];
// [
//  {
//     id: 1,
//     name: "DMayor's Lounge",
//     time: '42 mins',
//     location: 'Ikorodu',
//     type: 'Fine-dining',
//     likes: 16,
//     extras: [
//       {
//         text: 'Menu',
//         icon: RiBookReadFill,
//       },
//       {
//         text: 'Jumia Foods',
//         icon: FaMotorcycle,
//       },
//     ],
//   },]
const TestPage = () => {
  const { page, id, slug } = useParams();
  const router = useRouter();
  const [content, setContent] = useState<any>(null);
  const [sidebar, setSidebar] = useState<any>(null);
  const { data: businesses, isLoading } = useQuery({
    queryKey: ['categories', id],
    queryFn: () => getBusinessesByCategory(id as string),
    select: (data) => {
      return data.data;
    },
    staleTime: 10 * 60 * 60,
    enabled: !!id,
  });
  const { data: business, isLoading: isLoadingBusiness } = useQuery({
    queryKey: ['business', slug],
    queryFn: () => getBusinessById(slug as string),
    select: (data) => {
      return data.data;
    },
    staleTime: 10 * 60 * 60,
    enabled: !!slug,
  });

  useLayoutEffect(() => {
    console.log({ page, slug });
    if (page && slug && businesses) {
      setContent(pageContents[`${page as pageTypes}`] as any);
      const sideB = (
        <CommonItemList
          mx={true}
          itemArr={businesses}
          link={`/${page}/${id}`}
          page={page as string}
        />
      );
      setSidebar(sideB);
    }
    return () => {
      setSidebar(null);
    };
  }, [page, slug, businesses]);
  if (isLoading && isLoadingBusiness && !content) {
    return <Loading />;
  }
  console.log({ businesses, business });
  if (!isLoading && !isLoadingBusiness && !content) {
    return (
      <Error
        error={{ name: page as string, message: 'Page not found' }}
        reset={() => router.push('/')}
      />
    );
  }
  return (
    <AppInnerLayout sidebar={sidebar} title={business?.name}>
      <InnerPageContent
        data={{
          title: business?.name,
          content: business,
          actions: content?.actions,
          extras: content?.extras,
          photos: content?.photos,
          amenities: content?.amenities,
        }}
      />
    </AppInnerLayout>
  );
};

export default TestPage;
type pageTypes =
  | 'activities'
  | 'bars'
  | 'hotels'
  | 'restaurants'
  | 'supermarkets';
