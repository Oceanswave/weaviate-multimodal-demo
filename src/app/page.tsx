"use client";

import type { NextPage } from "next";
import { QueryClient, QueryClientProvider } from "react-query";

import Query from "./Query/Query";

const queryClient = new QueryClient();

const Home: NextPage = () => {
  const weaviateUrl = process.env.NEXT_PUBLIC_WEAVIATE_GRAPHQL_URL || "http://localhost:8080/v1/graphql";
  return (
    <QueryClientProvider client={queryClient}>
      <Query weaviateUrl={weaviateUrl} />
    </QueryClientProvider>
  );
};

export default Home;
