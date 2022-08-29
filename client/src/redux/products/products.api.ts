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
    addProduct: build.mutation<
      any,
      {
        title: string;
        description: string;
        price: number;
        file: File[];
        id?: string;
      }
    >({
      // @ts-ignore
      async queryFn(arg, { dispatch }, extra, fetchWithBQ) {
        const formData = new FormData();
        formData.append("photo", arg.file[0]);
        formData.append("title", arg.title);
        formData.append("description", arg.description);
        formData.append("price", arg.price.toString());
        const result = (await fetchWithBQ({
          url: "/products",
          method: "POST",
          body: formData,
        })) as { data: { item: IProduct } };

        dispatch(
          // @ts-ignore
          productsApi.util.updateQueryData(
            "getAllProducts",
            undefined,
            (productsDraft) => [...productsDraft, { ...result.data.item }]
          )
        );

        return result;
      },
      invalidatesTags: (result) => ["Products"],
    }),
    updateProduct: build.mutation<
      any,
      {
        title: string;
        description: string;
        price: number;
        file: File[];
        id?: string;
      }
    >({
      // @ts-ignore
      async queryFn(arg, { dispatch }, extra, fetchWithBQ) {
        const formData = new FormData();
        formData.append("photo", arg.file[0]);
        formData.append("title", arg.title);
        formData.append("description", arg.description);
        formData.append("price", arg.price.toString());
        const result = await fetchWithBQ({
          url: `/products/${arg.id}`,
          method: "PUT",
          body: formData,
        });
        return result;
      },
      invalidatesTags: (result) => ["Products"],
    }),
    deletePost: build.mutation<void, string>({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          productsApi.util.updateQueryData(
            "getAllProducts",
            undefined,
            (productsDraft) => {
              const newProducts = productsDraft.filter((o) => o._id !== id);
              return [...newProducts];
            }
          )
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
      invalidatesTags: ["Products"],
    }),
  }),
});

// Export hooks for usage in functional components
export const {
  useGetAllProductsQuery,
  useAddProductMutation,
  useDeletePostMutation,
  useUpdateProductMutation,
} = productsApi;
