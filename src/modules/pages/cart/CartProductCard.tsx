import { ProductInCart } from "@/store/cart-store";
import { Product } from "@prisma/client";
import classes from "./styles/productCard.module.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";

export type CartProductCardProps = {
  cart: ProductInCart;
  product: Product;
  delivery: boolean;
};

const CartProductCard = (props: CartProductCardProps) => {
  const { cart, product, delivery } = props;
  const [count, setCount] = useState<number>(cart.count);

  const dispath = useDispatch();

  const minusCount = () => {
    const newCount = count === 1 ? 1 : count - 1;
    setCount(newCount);

    dispath({
      type: "removeOne",
      payload: {
        type: product.id
      },
    });
  };

  const plusCount = () => {
    setCount(count + 1);

    dispath({
      type: "add",
      payload: {
        type: product.id,
        price: product.price,
        deliveryPrice: product.deliveryPrice,
        count: 1,
      },
    });
  };

  const removeAll = () => {
    dispath({
      type: "removeAll",
      payload: {
        type: product.id
      },
    });
  }

  return (
    <div className={classes.card}>
      <div className={classes.productImage} style={{
            backgroundImage: `url("http://localhost:3000/images/${product.image}")`,
          }}></div>
      <div className={classes.priceAndName}>
        <div className={classes.name}>{product.name}</div>
        <div className={classes.price}>{ delivery ? product.deliveryPrice : product.price }€</div>
      </div>
      <div className={classes.count}>
        <div
              className={classes.countButton}
              onClick={() => {
                minusCount();
              }}
            >
              -
            </div>
            <div>{count}</div>
            <div
              className={classes.countButton}
              onClick={() => {
                plusCount();
              }}
            >
              +
            </div>
      </div>
      <div className={classes.summ}>
              { delivery ? cart.count * cart.deliveryPrice : cart.count * cart.price}€
      </div>
      <div className={classes.remove} onClick={() => { removeAll() }}>
              x
      </div>
    </div>
  );
};

export default CartProductCard;
