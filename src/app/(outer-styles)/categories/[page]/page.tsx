'use client';

import { getBusinessesByCategory } from '@/api/categories';
import CommonItemList from '@/components/common/CommonItemList';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
const CategoriesPage = () => {
  const { page } = useParams();
  const { data: businesses, isLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: () => getBusinessesByCategory(page as string),
    select: (data) => {
      return data.data;
    },
    enabled: !!page,
  });
  console.log(businesses);
  return (
    <div>
      {isLoading ? (
        'Loading...'
      ) : (
        <CommonItemList
          itemArr={businesses}
          link={'/restaurants'}
          page="Restaurants"
        />
      )}
    </div>
  );
};

export default CategoriesPage;
