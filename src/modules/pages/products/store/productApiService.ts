import { rootApi, TAG_TYPES } from "@/store/root-api-service";
import {
  Product,
  ProductsBodyType,
  ProductTypes,
} from "../types/product.types";

const productApi = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], ProductsBodyType | void>({
      query: (body: ProductsBodyType) => ({
        url: "products",
        method: "POST",
        body,
      }),
      providesTags: (result) =>
        result?.length
          ? result.map(({ id }) => ({ type: TAG_TYPES.PRODUCT, id }))
          : [{ type: TAG_TYPES.PRODUCT, id: "list" }],
    }),
    getProductsTypes: builder.query<ProductTypes, string | void>({
      query: (query) => `products/get-products-types?${query ?? ""}`,
      providesTags: (result) =>
        result?.length
          ? result.map(({ type }) => ({
              type: TAG_TYPES.PRODUCT_TYPE,
              id: type,
            }))
          : [{ type: TAG_TYPES.PRODUCT, id: "list" }],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductsTypesQuery,
  useLazyGetProductsQuery,
} = productApi;
