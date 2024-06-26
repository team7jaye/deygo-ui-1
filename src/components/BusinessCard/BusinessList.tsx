import { getBusinessesByCategory } from "@/api/category";
import React, { useEffect, useState } from "react";
import BusinessCardItem from ".";

type Business = {
  id: string;
  name: string;
  address: string;
  distance: string | number;
};

type BusinessListProps = {
  categoryId: any;
  onSelectDetail?: (detail: string) => void; // Make the prop optional
};

const BusinessList = ({ categoryId, onSelectDetail }: BusinessListProps) => {
  const [businesses, setBusinesses] = useState<Business[]>([]);

  useEffect(() => {
    const fetchBusinesses = async () => {
      try {
        const data = await getBusinessesByCategory(categoryId);
        setBusinesses(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBusinesses();
  }, [categoryId]);

  return (
    <div>
      {businesses.map((business) => (
        <BusinessCardItem
          key={business.id}
          id={business.id}
          name={business.name}
          address={business.address}
          distance={business.distance}
          onSelectDetail={onSelectDetail} // Pass the prop down
        />
      ))}
    </div>
  );
};

export default BusinessList;
