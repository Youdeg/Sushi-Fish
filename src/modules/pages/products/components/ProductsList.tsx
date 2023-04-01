import ProductCard from "./ProductCard";
import styles from "./styles/ProductsList.module.scss";
import { Product } from "../types/product.types";
import { RingLoader } from "react-spinners";
import ProductTypesH1 from "@/modules/common/h1/ProductTypesH1";

type ProductListProps = {
  name: string;
  products?: Product[];
  loading?: boolean;
};

const ProductsList = (props: ProductListProps) => {
  const { products, loading, name } = props;

  return (
    <>
      <ProductTypesH1>{name}</ProductTypesH1>
      <div className={styles.productsList}>
        {loading ? (
          <RingLoader />
        ) : products?.length ? (
          products?.map((product) => (
            <ProductCard data={product} key={product.id} />
          ))
        ) : (
          "Empty."
        )}
      </div>
    </>
  );
};

export default ProductsList;
