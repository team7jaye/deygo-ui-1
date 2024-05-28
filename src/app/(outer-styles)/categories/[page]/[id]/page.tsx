'use client';

import { getBusinessesByCategory } from '@/api/categories';
import CommonItemList from '@/components/common/CommonItemList';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';

const CategoriesPage = () => {
  const { page, id } = useParams();
  const { data: businesses, isLoading } = useQuery({
    queryKey: ['categories', id],
    queryFn: () => getBusinessesByCategory(id as string),
    select: (data) => {
      return data.data;
    },
    staleTime: 10 * 60 * 60,
    enabled: !!id,
  });
  console.log(businesses);
  return (
    <div>
      {isLoading ? (
        'Loading...'
      ) : (
        <CommonItemList
          itemArr={businesses}
          link={`/${page}/${id}`}
          page={page as string}
        />
      )}
    </div>
  );
};

export default CategoriesPage;
