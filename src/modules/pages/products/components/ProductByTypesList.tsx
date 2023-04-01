import styles from "./styles/ProductsList.module.scss";
import { ProductTypes } from "../types/product.types";
import { RingLoader } from "react-spinners";
import ProductsList from "./ProductsList";

type ProductsByTypesListProps = {
  productsByTypes?: ProductTypes;
  loading: boolean;
};

const ProductsByTypesList = (props: ProductsByTypesListProps) => {
  const { productsByTypes, loading } = props;

  return (
    <div className={styles.productsTypesList}>
      {loading ? (
        <RingLoader color="#c23d5d" />
      ) : productsByTypes?.length ? (
        productsByTypes?.map(({ type, products }) => (
          <ProductsList
            key={type}
            name={type}
            products={products}
            loading={loading}
          />
        ))
      ) : (
        "Empty."
      )}
    </div>
  );
};

export default ProductsByTypesList;
