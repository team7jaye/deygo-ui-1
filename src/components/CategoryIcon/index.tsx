import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react';
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

  const bgColor = useColorModeValue('white', 'gray.700');
  const hoverBgColor = useColorModeValue('gray.100', 'gray.600');
  const activeBgColor = useColorModeValue('gray.200', 'gray.500');
  const textColor = useColorModeValue('gray.700', 'gray.300');
  const iconColor = useColorModeValue('primary.200', 'primary.300');

  return (
    <Flex
      as="button"
      onClick={handleClick}
      alignItems="center"
      py={4}
      px={2}
      borderRadius="md"
      _hover={{ bg: hoverBgColor }}
      _active={{ bg: activeBgColor }}
      bg={pathname.includes(`/${category}/${id}`) ? hoverBgColor : bgColor}
      transition="background-color 0.2s"
      w="full"
      textAlign="left"
    >
      <Flex gap={4} justifyContent="center" alignItems="center">
        <Box color={iconColor} fontSize="2xl">
          {icon}
        </Box>
        <Text textTransform="uppercase" color={textColor} fontWeight="bold">
          {category}
        </Text>
      </Flex>
    </Flex>
  );
};

export default CategoryIcon;
