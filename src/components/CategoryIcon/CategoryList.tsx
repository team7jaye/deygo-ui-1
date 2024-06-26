import React, { useEffect, useState } from "react";
import { Box, Flex, Spinner, Text, SimpleGrid } from "@chakra-ui/react";
import {
  FaBeer,
  FaCoffee,
  FaShoppingCart,
  FaHotel,
  FaRunning,
  FaWallet,
  FaHeart,
  FaGift,
} from "react-icons/fa";
import { fetchCategories } from "@/api/category";
import { useViewStore } from "../../../store";
import CategoryIcon from ".";

interface Category {
  id: string;
  name: string;
  description: string;
}

const iconMapping: Record<string, React.ReactNode> = {
  RESTAURANTS: <FaCoffee />,
  BARS: <FaBeer />,
  SUPERMARKETS: <FaShoppingCart />,
  HOTELS: <FaHotel />,
  ACTIVITIES: <FaRunning />,
  WALLETS: <FaWallet />,
  FAVOURITES: <FaHeart />,
  REWARDS: <FaGift />,
};

const CategoryList: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { view } = useViewStore();

  useEffect(() => {
    const getCategories = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setIsLoading(false);
      }
    };

    getCategories();
  }, []);

  return (
    <Box w="full">
      {isLoading ? (
        <Flex justifyContent="center" alignItems="center" h="full">
          <Spinner size="xl" />
        </Flex>
      ) : (
        <>
          {view === "list" ? (
            <Flex direction="column" gap={4}>
              {categories.map((category) => (
                <CategoryIcon
                  key={category.id}
                  icon={iconMapping[category.name.toUpperCase()] || <FaBeer />} // Default to FaBeer if no match
                  category={category.name}
                  id={category.id}
                />
              ))}
              {categories.length === 0 && (
                <Text textAlign="center" color="gray.500" fontSize="lg">
                  No categories available.
                </Text>
              )}
            </Flex>
          ) : (
            <SimpleGrid columns={[1, 2, 3]} spacing={4}>
              {categories.map((category) => (
                <CategoryIcon
                  key={category.id}
                  icon={iconMapping[category.name.toUpperCase()] || <FaBeer />} // Default to FaBeer if no match
                  category={category.name}
                  id={category.id}
                />
              ))}
              {categories.length === 0 && (
                <Text textAlign="center" color="gray.500" fontSize="lg">
                  No categories available.
                </Text>
              )}
            </SimpleGrid>
          )}
        </>
      )}
    </Box>
  );
};

export default CategoryList;
