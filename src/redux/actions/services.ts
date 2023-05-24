import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const poiseApi = createApi({
  reducerPath: "poiseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080" }),
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (url) => `${url}`,
      providesTags: ["Products"],
    }),
    postSignedIn: builder.mutation({
      query: (payload) => ({
        url: `/${payload.url}`,
        method: "POST",
        body: payload.data,
        headers: { "Content-type": "application/json" },
      }),
    }),
    postEditProduct: builder.mutation({
      query: (payload) => ({
        url: `/${payload.url}`,
        method: "POST",
        body: payload.data,
        headers: { "Content-type": "application/json; charset=UTF-8" },
      }),
      invalidatesTags: ["Products"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  usePostSignedInMutation,
  usePostEditProductMutation,
} = poiseApi;
