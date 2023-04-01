import { CartType } from "@/store/cart-store";
import { useSelector } from "react-redux";
import CartProductCard from "./CartProductCard";

interface CartState {
  cart: CartType;
}

const CartPage = () => {
  const cart = useSelector((state: CartState) => state.cart);

  console.log(cart);

  return (
    <>
      {cart
        ? cart.products.map((product) => (
            <CartProductCard key={product.type} data={product} />
          ))
        : "Пусто"}
    </>
  );
};

export default CartPage;
