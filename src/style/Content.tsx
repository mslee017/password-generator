import { Box, BoxProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

// const a = { x: 1, y: 2, z: 3 }
// const { x, ...b } = a
// // const x = a.x
// console.log(x)
// // 1
// console.log(b)
// // { y: 2, z: 3}

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
