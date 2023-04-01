import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer, { ProductInCart } from "./cart-store";
import { rootApi } from "./root-api-service";

const rootReducer = combineReducers({
  [rootApi.reducerPath]: rootApi.reducer,
  cart: cartReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rootApi.middleware),
});

store.subscribe(() => {
  if (store.getState().cart)
    localStorage.setItem(
      "cartState",
      JSON.stringify(
        store.getState().cart.products.map(({ type, count }: ProductInCart) => {
          return { type, count };
        })
      )
    );
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
