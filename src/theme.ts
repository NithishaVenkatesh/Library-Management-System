import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    brand: {
      50: '#f0e4ff',
      100: '#cbb2ff',
      200: '#a67fff',
      300: '#804dff',
      400: '#5a1aff',
      500: '#4100e6',
      600: '#3200b4',
      700: '#230082',
      800: '#140051',
      900: '#050021',
    },
    fun: {
      pink: '#FF6B6B',
      yellow: '#FFD93D',
      green: '#6BCB77',
      blue: '#4D96FF',
      purple: '#9B59B6',
    },
  },
  fonts: {
    heading: "'Comic Sans MS', cursive",
    body: "'Nunito', sans-serif",
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: 'full',
        fontWeight: 'bold',
      },
      variants: {
        fun: {
          bg: 'fun.pink',
          color: 'white',
          _hover: {
            bg: 'fun.purple',
          },
        },
      },
    },
    Card: {
      baseStyle: {
        container: {
          borderRadius: 'xl',
          boxShadow: 'xl',
        },
      },
    },
  },
});

export default theme; 