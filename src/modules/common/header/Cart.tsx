import { CartType } from "@/store/cart-store";
import { useSelector } from "react-redux";
import CartIcon from "../icons/CartIcon";
import styles from "./styles/cart.module.scss";

interface CartState {
  cart: CartType;
}

const Cart = () => {
  const cart = useSelector((state: CartState) => state.cart);

  return (
    <div className={styles.cart}>
      <CartIcon className={styles.logo} />
      {cart.deliverySum}€
    </div>
  );
};

export default Cart;
