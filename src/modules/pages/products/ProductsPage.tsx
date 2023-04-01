import Head from "next/head";
import ProductsByTypesList from "./components/ProductByTypesList";
import ProductsList from "./components/ProductsList";
import {
  useGetProductsQuery,
  useGetProductsTypesQuery,
} from "./store/productApiService";

const ProductsPage = () => {
  const { data, isLoading, isFetching } = useGetProductsTypesQuery();

  return (
    <>
      <Head>
        <title>SushiFish || Меню</title>
      </Head>
      <ProductsByTypesList
        productsByTypes={data}
        loading={isLoading || isFetching}
      />
    </>
  );
};

export default ProductsPage;
