import React from 'react';
import {
  Box,
  VStack,
  Heading,
  Text,
  Button,
  Image,
  HStack,
  Divider,
  useToast
} from '@chakra-ui/react';
import { FaTrash } from 'react-icons/fa';

interface CartItem {
  id: number;
  title: string;
  author: string;
  coverImage: string;
  price: number;
  quantity: number;
}

const Cart = () => {
  const [cartItems, setCartItems] = React.useState<CartItem[]>([
    {
      id: 1,
      title: "The Magic of Colors",
      author: "Rainbow Writer",
      coverImage: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&auto=format&fit=crop&q=60",
      price: 1499,
      quantity: 2
    },
    {
      id: 2,
      title: "Adventures in Bookland",
      author: "Story Explorer",
      coverImage: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&auto=format&fit=crop&q=60",
      price: 1199,
      quantity: 1
    }
  ]);

  const toast = useToast();

  const removeFromCart = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
    toast({
      title: "Item removed",
      description: "Book has been removed from your cart",
      status: "success",
      duration: 2000,
      isClosable: true,
      position: "top-right"
    });
  };

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const checkout = () => {
    toast({
      title: "Order placed!",
      description: "Thank you for your purchase! 🎉",
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "top"
    });
    setCartItems([]);
  };

  return (
    <Box>
      <Heading color="white" mb={8} textAlign="center">Your Cart 🛒</Heading>

      <Box bg="white" p={6} borderRadius="xl" boxShadow="xl">
        {cartItems.length > 0 ? (
          <VStack spacing={4} align="stretch">
            {cartItems.map((item) => (
              <Box key={item.id}>
                <HStack spacing={4}>
                  <Image
                    src={item.coverImage}
                    alt={item.title}
                    boxSize="100px"
                    objectFit="cover"
                    borderRadius="md"
                  />
                  <VStack align="start" flex={1}>
                    <Text fontWeight="bold">{item.title}</Text>
                    <Text color="gray.600">{item.author}</Text>
                    <Text color="fun.pink" fontWeight="bold">
                      {formatPrice(item.price * item.quantity)}
                    </Text>
                  </VStack>
                  <HStack>
                    <Button
                      size="sm"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </Button>
                    <Text>{item.quantity}</Text>
                    <Button
                      size="sm"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </Button>
                  </HStack>
                  <Button
                    colorScheme="red"
                    variant="ghost"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <FaTrash />
                  </Button>
                </HStack>
                <Divider my={4} />
              </Box>
            ))}

            <Box pt={4}>
              <HStack justify="space-between" mb={4}>
                <Text fontSize="xl" fontWeight="bold">Total:</Text>
                <Text fontSize="xl" fontWeight="bold" color="fun.pink">
                  {formatPrice(total)}
                </Text>
              </HStack>
              <Button
                colorScheme="purple"
                size="lg"
                w="100%"
                borderRadius="full"
                onClick={checkout}
              >
                Checkout
              </Button>
            </Box>
          </VStack>
        ) : (
          <VStack py={8}>
            <Text fontSize="xl">Your cart is empty 😢</Text>
            <Button
              as="a"
              href="/books"
              colorScheme="purple"
              borderRadius="full"
            >
              Browse Books
            </Button>
          </VStack>
        )}
      </Box>
    </Box>
  );
};

export default Cart; 