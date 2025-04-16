import React from 'react';
import { Box, Container } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Books from './pages/Books';
import Search from './pages/Search';
import Cart from './pages/Cart';

function App() {
  return (
    <Router>
      <Box minH="100vh" bgGradient="linear(to-br, fun.blue, fun.purple)">
        <Container maxW="container.xl" py={8}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<Books />} />
            <Route path="/search" element={<Search />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Container>
      </Box>
    </Router>
  );
}

export default App; 