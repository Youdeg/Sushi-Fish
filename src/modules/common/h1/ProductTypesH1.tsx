import { ReactNode } from "react";
import styles from "./styles/productTypesH1Props.module.scss";

type ProductTypesH1Props = {
  children: ReactNode;
  className?: string;
};

const ProductTypesH1 = ({ children }: ProductTypesH1Props) => {
  return <h1 className={styles.text}>{children}</h1>;
};

export default ProductTypesH1;
