import { extendTheme } from '@chakra-ui/react';

const customColors = {
  brandGreen: {
    500: '#a4ffaf',
  },
};

const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        background: '#18171f',
      },
    },
  },
  components: {
    Checkbox: {
      baseStyle: {
        control: {
          borderRadius: 'none',
          _checked: {
            bg: '#A4ffaf',
            color: '#18171F',
            borderColor: 'transparent',
          },
        },
      },
    },
  },
  colors: customColors,
  fonts: {
    body: 'Jetbrains Mono, monospace',
  },
});
export default theme;
