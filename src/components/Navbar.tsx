import React from 'react';
import { Box, Flex, Button, Icon } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';
import { FaBook, FaSearch, FaShoppingCart, FaHome } from 'react-icons/fa';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <Box 
      bg="white" 
      p={4} 
      borderRadius="full" 
      boxShadow="xl"
      mb={8}
    >
      <Flex justify="space-around" align="center">
        <Link to="/">
          <Button 
            variant={isActive('/') ? 'solid' : 'fun'}
            colorScheme={isActive('/') ? 'purple' : undefined}
            leftIcon={<Icon as={FaHome} />}
            size="lg"
          >
            Home
          </Button>
        </Link>
        <Link to="/books">
          <Button 
            variant={isActive('/books') ? 'solid' : 'fun'}
            colorScheme={isActive('/books') ? 'purple' : undefined}
            leftIcon={<Icon as={FaBook} />}
            size="lg"
          >
            Books
          </Button>
        </Link>
        <Link to="/search">
          <Button 
            variant={isActive('/search') ? 'solid' : 'fun'}
            colorScheme={isActive('/search') ? 'purple' : undefined}
            leftIcon={<Icon as={FaSearch} />}
            size="lg"
          >
            Search
          </Button>
        </Link>
        <Link to="/cart">
          <Button 
            variant={isActive('/cart') ? 'solid' : 'fun'}
            colorScheme={isActive('/cart') ? 'purple' : undefined}
            leftIcon={<Icon as={FaShoppingCart} />}
            size="lg"
          >
            Cart
          </Button>
        </Link>
      </Flex>
    </Box>
  );
};

export default Navbar; 