import React from 'react';
import { Box, Image, Text, Badge, Button, Flex } from '@chakra-ui/react';
import { FaStar, FaHeart } from 'react-icons/fa';

interface BookCardProps {
  id: number;
  title: string;
  author: string;
  coverImage: string;
  rating: number;
  price: number;
  genre: string;
}

const BookCard: React.FC<BookCardProps> = ({ title, author, coverImage, rating, price, genre }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bg="white"
      p={4}
      boxShadow="xl"
      position="relative"
      transition="transform 0.2s"
      _hover={{ transform: 'scale(1.02)' }}
    >
      <Box position="absolute" top={2} right={2}>
        <Button
          size="sm"
          variant="ghost"
          colorScheme="pink"
          onClick={() => {}}
        >
          <FaHeart />
        </Button>
      </Box>

      <Image
        src={coverImage}
        alt={title}
        borderRadius="md"
        height="300px"
        width="100%"
        objectFit="cover"
        mx="auto"
      />

      <Box p="4">
        <Flex align="center" mb={2}>
          <Badge borderRadius="full" px="2" colorScheme="purple">
            {genre}
          </Badge>
          <Flex ml="auto" align="center">
            <FaStar color="gold" />
            <Text ml={1}>{rating}</Text>
          </Flex>
        </Flex>

        <Text
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
          color="gray.700"
        >
          {title}
        </Text>

        <Text color="gray.500" fontSize="sm">
          by {author}
        </Text>

        <Flex mt={4} justify="space-between" align="center">
          <Text fontSize="xl" fontWeight="bold" color="fun.pink">
            {formatPrice(price)}
          </Text>
          <Button
            variant="fun"
            size="sm"
          >
            Add to Cart
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default BookCard; 