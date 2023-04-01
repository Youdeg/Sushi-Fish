import useWeight from "@/hooks/useWeight";
import AddButton from "@/modules/common/buttons/addButton";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Product } from "../types/product.types";
import styles from "./styles/product.module.scss";

type ProductProps = {
  data: Product;
};

const ProductCard = (props: ProductProps) => {
  const { id, name, image, weight, price, deliveryPrice } = props.data;
  const [count, setCount] = useState<number>(1);

  const dispath = useDispatch();

  const minusCount = () => {
    const newCount = count === 1 ? 1 : count - 1;
    setCount(newCount);
  };

  const plusCount = () => {
    setCount(count + 1);
  };

  const addToCart = () => {
    dispath({
      type: "add",
      payload: {
        type: id,
        price,
        deliveryPrice,
        count,
      },
    });
    setCount(1);
  };

  const weightWithUnit = useWeight(weight);

  return (
    <div className={styles.productContainer}>
      <div className={styles.product}>
        <div
          className={styles.productImage}
          style={{
            backgroundImage: `url("http://localhost:3000/images/${image}")`,
          }}
        >
          <div className={styles.price}>
            <span>
              Pickup <br /> {price}€
            </span>
          </div>
          <div className={styles.priceDelivery}>
            <span>
              {deliveryPrice}€ <br /> Delivery
            </span>
          </div>
        </div>
        <div className={styles.productInfo}>
          <div>{name}</div>
          <div className={styles.widthText}>Weight - {weightWithUnit}</div>
        </div>
        <div className={styles.productCount}>
          <div className={styles.count}>
            <div
              className={styles.countButton}
              onClick={() => {
                minusCount();
              }}
            >
              -
            </div>
            <div>{count}</div>
            <div
              className={styles.countButton}
              onClick={() => {
                plusCount();
              }}
            >
              +
            </div>
          </div>
          <AddButton onClick={() => addToCart()}>Add</AddButton>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
