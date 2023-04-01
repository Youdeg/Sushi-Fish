import Head from "next/head";
import CartList from "./CartList";

const CartPage = () => {
  return (
    <>
      <Head>
      <title>SushiFish || Корзина</title>
      </Head>
      <CartList />
    </>
  );
};

export default CartPage;
