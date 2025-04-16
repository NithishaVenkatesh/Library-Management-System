import React, { useState } from 'react';
import { SimpleGrid, Input, Select, Box, Heading, Flex } from '@chakra-ui/react';
import BookCard from '../components/BookCard';

export const booksData = [
  {
    id: 1,
    title: "The Magic of Colors",
    author: "Rainbow Writer",
    coverImage: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&auto=format&fit=crop&q=60",
    rating: 4.8,
    price: 1499,
    genre: "Fantasy"
  },
  {
    id: 2,
    title: "Adventures in Bookland",
    author: "Story Explorer",
    coverImage: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&auto=format&fit=crop&q=60",
    rating: 4.5,
    price: 1199,
    genre: "Adventure"
  },
  {
    id: 3,
    title: "The Colorful Mystery",
    author: "Mystery Master",
    coverImage: "https://images.unsplash.com/photo-1495640388908-05fa85288e61?w=500&auto=format&fit=crop&q=60",
    rating: 4.7,
    price: 1299,
    genre: "Mystery"
  },
  {
    id: 4,
    title: "Love in the Library",
    author: "Romance Writer",
    coverImage: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=500&auto=format&fit=crop&q=60",
    rating: 4.6,
    price: 1399,
    genre: "Romance"
  },
  {
    id: 5,
    title: "Space Adventures",
    author: "Sci-Fi Master",
    coverImage: "https://images.unsplash.com/photo-1518281420975-50db6e5d0a97?w=500&auto=format&fit=crop&q=60",
    rating: 4.9,
    price: 1599,
    genre: "Science Fiction"
  }
] as const;

const Books = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');

  const filteredBooks = booksData.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         book.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = selectedGenre === '' || book.genre === selectedGenre;
    return matchesSearch && matchesGenre;
  });

  return (
    <Box>
      <Heading color="white" mb={8} textAlign="center">Browse Our Collection 📚</Heading>
      
      <Flex gap={4} mb={8}>
        <Input
          placeholder="Search books..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          bg="white"
          borderRadius="full"
        />
        <Select
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
          bg="white"
          borderRadius="full"
          w="200px"
        >
          <option value="">All Genres</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Adventure">Adventure</option>
          <option value="Mystery">Mystery</option>
          <option value="Romance">Romance</option>
          <option value="Science Fiction">Science Fiction</option>
        </Select>
      </Flex>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
        {filteredBooks.map((book) => (
          <BookCard key={book.id} {...book} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Books; 