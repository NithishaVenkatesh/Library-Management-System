import React from 'react';
import { Box, Grid, Heading, Text, SimpleGrid, Container, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import BookCard from '../components/BookCard';

const MotionBox = motion(Box);

const featuredBooks = [
  {
    id: 1,
    title: "The Magic of Colors",
    author: "Rainbow Writer",
    coverImage: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&auto=format&fit=crop&q=60",
    rating: 4.8,
    price: 2499,
    genre: "Fantasy"
  },
  {
    id: 2,
    title: "Adventures in Bookland",
    author: "Story Explorer",
    coverImage: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?w=500&auto=format&fit=crop&q=60",
    rating: 4.5,
    price: 1999,
    genre: "Adventure"
  },
  {
    id: 3,
    title: "The Colorful Mystery",
    author: "Mystery Master",
    coverImage: "https://images.unsplash.com/photo-1549122728-f519709caa9c?w=500&auto=format&fit=crop&q=60",
    rating: 4.7,
    price: 2299,
    genre: "Mystery"
  }
];

const categories = [
  { 
    name: "Fantasy",
    color: "fun.purple",
    image: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=500&auto=format&fit=crop&q=60"
  },
  { 
    name: "Adventure",
    color: "fun.blue",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=500&auto=format&fit=crop&q=60"
  },
  { 
    name: "Mystery",
    color: "fun.pink",
    image: "https://images.unsplash.com/photo-1587876931567-564ce588bfbd?w=500&auto=format&fit=crop&q=60"
  },
  { 
    name: "Romance",
    color: "fun.yellow",
    image: "https://images.unsplash.com/photo-1515894203077-2cd25148bf4e?w=500&auto=format&fit=crop&q=60"
  },
  { 
    name: "Science Fiction",
    color: "fun.green",
    image: "https://images.unsplash.com/photo-1501862700950-18382cd41497?w=500&auto=format&fit=crop&q=60"
  }
];

const Home = () => {
  return (
    <Container maxW="container.xl">
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        mb={12}
      >
        <Heading 
          as="h2" 
          size="xl" 
          mb={4}
          color="white"
          textAlign="center"
        >
          Featured Books 🌟
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {featuredBooks.map((book) => (
            <BookCard key={book.id} {...book} />
          ))}
        </SimpleGrid>
      </MotionBox>

      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Heading 
          as="h2" 
          size="xl" 
          mb={6}
          color="white"
          textAlign="center"
        >
          Explore Categories 🎨
        </Heading>
        <Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={6}>
          {categories.map((category, index) => (
            <MotionBox
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Box
                p={6}
                borderRadius="xl"
                bg={category.color}
                textAlign="center"
                cursor="pointer"
                position="relative"
                overflow="hidden"
                height="200px"
                _hover={{ shadow: "xl" }}
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  position="absolute"
                  top={0}
                  left={0}
                  width="100%"
                  height="100%"
                  objectFit="cover"
                  opacity={0.3}
                />
                <Text 
                  fontSize="2xl" 
                  fontWeight="bold" 
                  color="white"
                  position="relative"
                  zIndex={1}
                >
                  {category.name}
                </Text>
              </Box>
            </MotionBox>
          ))}
        </Grid>
      </MotionBox>
    </Container>
  );
};

export default Home; 