import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProduct } from "./products.api.type";

export const productsApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
  tagTypes: ["Products"],
  endpoints: (build) => ({
    getAllProducts: build.query<IProduct[], void>({
      query: () => ({
        url: `/products`,
        method: "GET",
      }),
      providesTags: (result) => ["Products"],
    }),
  }),
});

// Export hooks for usage in functional components
export const { useGetAllProductsQuery } = productsApi;
