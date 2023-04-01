import { CartType } from "@/store/cart-store";
import { useSelector } from "react-redux";
import CartProductCard, { CartProductCardProps } from "./CartProductCard";
import { useGetProductsByTypeQuery } from "../products/store/productApiService";
import { useEffect, useState } from "react";
import RingLoader from "react-spinners/RingLoader";
import classes from "./styles/productList.module.scss";
import Switch from 'react-input-switch';

interface CartState {
  cart: CartType;
}

const CartList = () => {
  const cart = useSelector((state: CartState) => state.cart);
  const { data, isLoading, isFetching }  = useGetProductsByTypeQuery(cart.products.map(el => el.type));
  const [cardData, setCardData] = useState<CartProductCardProps[]>([]); 
  const [value, setValue] = useState<number>(0);

  useEffect(() => {
    if (!data || !cart) return;

    const mergeArray: CartProductCardProps[] = [];

    for (const cartProduct of cart.products) {
      for (const product of data) {
        if (product.id === cartProduct.type) {
          mergeArray.push({ cart: cartProduct, product: product });
        }
      }
    }

    setCardData(mergeArray);
  }, [data, cart])
  

  return (
    <div className={classes.cartList}>
        <div style={{ display: 'flex', alignItems: 'center', width: '25vw', justifyContent: 'center' }}>Delivery <div style={{ margin: 15 }}><Switch value={value} onChange={setValue} /></div> Pickup </div>
      {isLoading || isFetching ? (
          <RingLoader color="#c23d5d" />
        ) : cardData.length ? (
          cardData.map((data) => (
            <CartProductCard cart={data.cart} product={data.product} delivery={ value === 0 } />
          ))
        ) : (
          "Empty."
        )}
        <div className={classes.total}>Total: { value === 0 ? cart.deliverySum : cart.sum }</div>
    </div>
  );
};

export default CartList;
