import React, { useState } from 'react';
import {
  Box,
  VStack,
  Input,
  Button,
  SimpleGrid,
  Heading,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Text,
  Select,
  Flex
} from '@chakra-ui/react';
import BookCard from '../components/BookCard';
import { booksData } from './Books';

const Search = () => {
  const [searchParams, setSearchParams] = useState({
    query: '',
    genre: '',
    priceRange: [0, 2000],
    minRating: 0
  });

  const [results, setResults] = useState(booksData);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const handleSearch = () => {
    const filtered = booksData.filter(book => {
      const matchesQuery = book.title.toLowerCase().includes(searchParams.query.toLowerCase()) ||
                         book.author.toLowerCase().includes(searchParams.query.toLowerCase());
      const matchesGenre = !searchParams.genre || book.genre === searchParams.genre;
      const matchesPrice = book.price >= searchParams.priceRange[0] && 
                          book.price <= searchParams.priceRange[1];
      const matchesRating = book.rating >= searchParams.minRating;

      return matchesQuery && matchesGenre && matchesPrice && matchesRating;
    });

    setResults(filtered);
  };

  return (
    <Box>
      <Heading color="white" mb={8} textAlign="center">Advanced Search 🔍</Heading>
      
      <VStack spacing={6} bg="white" p={6} borderRadius="xl" mb={8}>
        <Input
          placeholder="Search by title or author..."
          value={searchParams.query}
          onChange={(e) => setSearchParams({ ...searchParams, query: e.target.value })}
        />

        <Select
          placeholder="Select genre"
          value={searchParams.genre}
          onChange={(e) => setSearchParams({ ...searchParams, genre: e.target.value })}
        >
          <option value="Fantasy">Fantasy</option>
          <option value="Adventure">Adventure</option>
          <option value="Mystery">Mystery</option>
          <option value="Romance">Romance</option>
          <option value="Science Fiction">Science Fiction</option>
        </Select>

        <Box w="100%">
          <Text mb={2}>Price Range: {formatPrice(searchParams.priceRange[0])} - {formatPrice(searchParams.priceRange[1])}</Text>
          <RangeSlider
            defaultValue={[0, 2000]}
            min={0}
            max={2000}
            step={100}
            onChange={(val) => setSearchParams({ ...searchParams, priceRange: val })}
          >
            <RangeSliderTrack bg="purple.100">
              <RangeSliderFilledTrack bg="purple.500" />
            </RangeSliderTrack>
            <RangeSliderThumb index={0} />
            <RangeSliderThumb index={1} />
          </RangeSlider>
        </Box>

        <Box w="100%">
          <Text mb={2}>Minimum Rating: {searchParams.minRating}</Text>
          <RangeSlider
            defaultValue={[0]}
            min={0}
            max={5}
            step={0.1}
            onChange={([val]) => setSearchParams({ ...searchParams, minRating: val })}
          >
            <RangeSliderTrack bg="pink.100">
              <RangeSliderFilledTrack bg="pink.500" />
            </RangeSliderTrack>
            <RangeSliderThumb index={0} />
          </RangeSlider>
        </Box>

        <Button
          colorScheme="purple"
          size="lg"
          borderRadius="full"
          w="100%"
          onClick={handleSearch}
        >
          Search Books
        </Button>
      </VStack>

      {results.length > 0 ? (
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {results.map((book) => (
            <BookCard key={book.id} {...book} />
          ))}
        </SimpleGrid>
      ) : (
        <Text color="white" textAlign="center" fontSize="xl">
          No books found matching your criteria 😢
        </Text>
      )}
    </Box>
  );
};

export default Search; 