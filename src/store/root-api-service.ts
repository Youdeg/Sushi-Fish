import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

enum TAG_TYPES {
  PRODUCT = "PRODUCT",
  PRODUCT_TYPE = "PRODUCT_TYPE",
}

const rootApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: () => ({}),
  tagTypes: Object.values(TAG_TYPES),
});

export { rootApi, TAG_TYPES };
