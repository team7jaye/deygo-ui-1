// 'use client';

// import { NextUIProvider } from '@nextui-org/react';

// export function Providers({ children }: { children: React.ReactNode }) {
//   return <NextUIProvider>{children}</NextUIProvider>;
// }

// app/providers.tsx
"use client";

import { ChakraProvider } from "@chakra-ui/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider>{children}</ChakraProvider>;
}
