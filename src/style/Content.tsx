import { Box, BoxProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

export default function ContentStyle({
  children,
  ...styleProps
}: {
  children: ReactNode;
} & BoxProps) {
  return (
    <Box background="#24232c" px="32px" py="24px" my="20px" {...styleProps}>
      {children}
    </Box>
  );
}
