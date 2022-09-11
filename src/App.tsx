import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "src/routes";
import { ColorModeSwitcher } from "src/ColorModeSwitcher";

import { ErrorBoundary } from "src/components";

import { FavouritesContextProvider } from "src/providers";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

export const App = (): JSX.Element => {
  return (
    <ErrorBoundary>
      <ChakraProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <ColorModeSwitcher />
          <BrowserRouter>
            <FavouritesContextProvider>
              <Routes></Routes>
            </FavouritesContextProvider>
          </BrowserRouter>
        </QueryClientProvider>
      </ChakraProvider>
    </ErrorBoundary>
  );
};
