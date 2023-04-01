import { ProductInCart } from "@/store/cart-store";

type CartProductCardProps = {
  data: ProductInCart;
};

const CartProductCard = (props: CartProductCardProps) => {
  const { data } = props;

  return (
    <div>
      {data.type} {data.count}
    </div>
  );
};

export default CartProductCard;
