import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const poiseApi = createApi({
  reducerPath: "poiseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.thisispoise.com/" }),

  tagTypes: ["Products", "Product", "Edit"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (url) => `${url}`,
      providesTags: ["Products"],
    }),
    getProduct: builder.query({
      query: (id) => `products/product/${id}`,
      providesTags: ["Product"],
    }),
    postSignedIn: builder.mutation({
      query: (payload) => ({
        url: `/${payload.url}`,
        method: "POST",
        body: payload.data,
        headers: { "Content-type": "application/json" },
      }),
    }),
    postSignedUp: builder.mutation({
      query: (payload) => ({
        url: "/auth/signup",
        method: "PUT",
        body: payload,
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      }),
    }),
    postNewProduct: builder.mutation({
      query: (payload) => ({
        url: `/products/postproduct`,
        method: "POST",
        body: payload,
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      }),
    }),
    postEditProduct: builder.mutation({
      query: ({ data, id }) => ({
        url: `products/product/${id}`,
        providesTags: ["Products,Edit"],

        method: "PUT",
        body: data,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      }),
      invalidatesTags: ["Products"],
    }),
    postDeleteProduct: builder.mutation({
      query: (id) => ({
        url: `products/product/${id}`,
        method: "DELETE",
        headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` },
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductQuery,
  usePostSignedInMutation,
  usePostNewProductMutation,
  usePostEditProductMutation,
  usePostDeleteProductMutation,
  usePostSignedUpMutation,
} = poiseApi;
