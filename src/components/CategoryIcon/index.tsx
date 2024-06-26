import { Box, Flex, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { useRouter, usePathname } from 'next/navigation';

interface CategoryIconProps {
  icon: ReactNode;
  category: string;
  id: string | number;
}

const CategoryIcon: React.FC<CategoryIconProps> = ({ icon, category, id }) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    router.push(`/${category}/${id}`);
  };

  return (
    <Flex
      as="button"
      onClick={handleClick}
      alignItems="center"
      py={4}
      px={2}
      borderRadius="md"
      _hover={{ bg: 'gray.100' }}
      _active={{ bg: 'gray.200' }}
      bg={pathname.includes(`/${category}/${id}`) ? 'gray.100' : 'white'}
      transition="background-color 0.2s"
      w="full"
      textAlign="left"
    >
      <Flex gap={4} justifyContent="center" alignItems="center">
        <Box color="primary.200" fontSize="2xl">
          {icon}
        </Box>
        <Text textTransform="uppercase" color="gray.700" fontWeight="bold">
          {category}
        </Text>
      </Flex>
    </Flex>
  );
};

export default CategoryIcon;
