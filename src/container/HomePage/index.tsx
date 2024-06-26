import { fetchCategories } from "@/api/category";
import CategoryIcon from "@/components/CategoryIcon";
import CategoryList from "@/components/CategoryIcon/CategoryList";
import { MainLayout } from "@/components/global/Layout";
import React, { useEffect, useState } from "react";
import { FaBeer } from "react-icons/fa";

export async function getServerSideProps() {
  return {
    redirect: {
      destination: "/categories",
      permanent: false, // or true if it's a permanent redirect
    },
  };
}

type Props = {};
type Category = {
  id: string;
  name: string;
  description: string;
};

const DGHomeCategoriesContainer = (props: Props) => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    getCategories();
  }, []);

  return (
    <div>
      <MainLayout>
        <CategoryList />
      </MainLayout>
    </div>
  );
};

export default DGHomeCategoriesContainer;
