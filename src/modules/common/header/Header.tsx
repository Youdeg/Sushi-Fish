import useWindowDimensions from "@/hooks/useWindowDimensions";
import { useLazyGetProductsQuery } from "@/modules/pages/products/store/productApiService";
import { ProductInCart } from "@/store/cart-store";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Cart from "./Cart";
import Logo from "./Logo";
import RenderHeaderNavigation, {
  NavigationButton,
} from "./RenderHeaderNavigation";
import styles from "./styles/header.module.scss";

const Header = () => {
  const dispath = useDispatch();

  const { width } = useWindowDimensions();
  const [buttons, setButtons] = useState<NavigationButton[]>([]);
  const [trigger] = useLazyGetProductsQuery();

  useEffect(() => {
    const cart = localStorage.getItem("cartState")
      ? //@ts-ignore
        JSON.parse(localStorage.getItem("cartState"))
      : null;

    try {
      if (cart.length) {
        (async () => {
          const { data } = await trigger({
            //@ts-ignore
            id: cart.map((el: ProductInCart) => el.type),
          });

          if (!data) return;

          const productsArray: ProductInCart[] = [];

          cart.forEach((cartProduct: ProductInCart) => {
            data.forEach((product) => {
              if (cartProduct.type === product.id) {
                productsArray.push({
                  type: cartProduct.type,
                  price: product.price,
                  deliveryPrice: product.deliveryPrice,
                  count: cartProduct.count,
                });
              }
            });
          });

          let sum = 0;
          let deliverySum = 0;

          productsArray.forEach((product) => {
            sum += product.price * product.count;
            deliverySum += product.deliveryPrice * product.count;
          });

          dispath({
            type: "set",
            payload: {
              products: productsArray,
              sum,
              deliverySum,
            },
          });
        })();
      }
    } catch {}
  }, []);

  useEffect(() => {
    if (width < 700) {
      setButtons([
        { name: "Menu", link: "/products" },
        { name: "Delivery", link: "/delivery" },
      ]);
    } else {
      setButtons([
        { name: "Menu", link: "/products" },
        { name: "Delivery", link: "/delivery" },
      ]);
    }
  }, [width]);

  return (
    <div className={styles.header}>
      <div style={{ flexBasis: '25%' }}></div>
      <div className={styles.center}>
        <RenderHeaderNavigation data={buttons} className={styles.buttonsList} />
        <Logo className={styles.logo} />
        <RenderHeaderNavigation data={buttons} className={styles.buttonsList} />
      </div>
      <Cart />
    </div>
  );
};

export default Header;
