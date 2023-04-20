"use client";

import type { NextPage } from "next";
import { QueryClient, QueryClientProvider } from "react-query";

import Query from "./Query/Query";

const queryClient = new QueryClient();

const Home: NextPage = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Query />
    </QueryClientProvider>
  );
};

export default Home;
