'use client';
import { useParams } from 'next/navigation';
import React, { useLayoutEffect, useState } from 'react';
import { pageContents } from '../pageContents';
import AppInnerLayout from '@/components/appInnerLayout';
import MainActivity from '@/app/(outer-styles)/activities/MainActivity';
import MainBar from '@/app/(outer-styles)/bars/MainBar';
import MainHotel from '@/app/(outer-styles)/hotels/MainHotel';
import MainRestuarant from '@/app/(outer-styles)/restaurants/MainRestuarant';
import MainSupermarket from '@/app/(outer-styles)/supermarkets/MainSupermarket';
import InnerPageContent from '@/components/common/InnerPageContent';
import Loading from '@/app/loading';
import Error from '@/app/error';
import { useRouter } from 'next/navigation';

const sidebars = [
  {
    name: 'activities',
    bar: <MainActivity mx={true} />,
  },
  {
    name: 'bars',
    bar: <MainBar mx={true} />,
  },
  {
    name: 'hotels',
    bar: <MainHotel mx={true} />,
  },
  {
    name: 'restaurants',
    bar: <MainRestuarant mx={true} />,
  },
  {
    name: 'supermarkets',
    bar: <MainSupermarket mx={true} />,
  },
];
const TestPage = () => {
  const { page, slug } = useParams();
  const router = useRouter();
  const [content, setContent] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<any>(true);
  const [sidebar, setSidebar] = useState<any>(null);
  useLayoutEffect(() => {
    console.log({ page, slug });
    if (page && slug) {
      setContent(pageContents[`${page as pageTypes}`] as any);
      setSidebar(sidebars.find((item) => item.name === page)?.bar);
    }
    return () => {
      setSidebar(null);
    };
  }, [page, slug]);
  if (isLoading && !content) {
    return <Loading />;
  }
  if (!isLoading && !content) {
    return (
      <Error
        error={{ name: page as string, message: 'Page not found' }}
        reset={() => router.push('/')}
      />
    );
  }
  return (
    <AppInnerLayout sidebar={sidebar}>
      <InnerPageContent
        data={{
          title: decodeURIComponent(slug as string),
          actions: content.actions,
          extras: content.extras,
          photos: content.photos,
          amenities: content.amenities,
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
