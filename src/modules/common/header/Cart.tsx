import { CartType } from "@/store/cart-store";
import { useSelector } from "react-redux";
import CartIcon from "../icons/CartIcon";
import styles from "./styles/cart.module.scss";
import Link from "next/link";

interface CartState {
  cart: CartType;
}

const Cart = () => {
  const cart = useSelector((state: CartState) => state.cart);

  return (
    <div className={styles.cart}>
      <Link href="/cart"><CartIcon className={styles.logo} /></Link>
      {cart.deliverySum}€
    </div>
  );
};

export default Cart;
