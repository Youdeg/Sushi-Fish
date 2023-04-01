import getItemCopy from "@ardentia/deep-copy";
import { AnyAction } from "redux";

export type ProductInCart = {
  type: number;
  price: number;
  deliveryPrice: number;
  count: number;
};

export type CartType = {
  products: ProductInCart[];
  sum: number;
  deliverySum: number;
};

const cartState: CartType = {
  products: [],
  sum: 0,
  deliverySum: 0,
};

export default function cartReducer(state = cartState, action: AnyAction) {
  const stateCopy: CartType = getItemCopy(state);
  const newProducts = stateCopy.products;
  let price = 0,
    deliveryPrice = 0;

  switch (action.type) {
    case "add":
      if (
        newProducts.filter((product) => product.type === action.payload.type)
          .length
      ) {
        newProducts.forEach((product) => {
          if (product.type === action.payload.type)
            product.count += action.payload.count;
        });
      } else {
        newProducts.push(action.payload);
      }
      console.log(newProducts);
      return {
        products: newProducts,
        sum: state.sum + action.payload.price * action.payload.count,
        deliverySum:
          state.deliverySum +
          action.payload.deliveryPrice * action.payload.count,
      };
    case "removeOne":
      newProducts.forEach((product, index, object) => {
        if (product.type === action.payload.type) {
          product.count -= 1;
          price -= product.price;
          deliveryPrice -= product.deliveryPrice;
          if (!product.count) object.splice(index, 1);
        }
      });
      return {
        products: newProducts,
        sum: state.sum - price,
        deliverySum: state.deliverySum - deliveryPrice,
      };
    case "removeAll":
      newProducts.forEach((product, index, object) => {
        if (product.type === action.payload.type) {
          price = product.price * product.count;
          deliveryPrice = product.deliveryPrice * product.count;
          product.count = 0;
          object.splice(index, 1);
        }
      });
      return {
        products: newProducts,
        sum: state.sum - price,
        deliverySum: state.deliverySum - deliveryPrice,
      };
    case "set":
      return action.payload;
    case "empty":
      return {
        ...cartState,
      };
    default:
      return state;
  }
}
