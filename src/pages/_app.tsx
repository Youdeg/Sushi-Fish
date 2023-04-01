import Header from "@/modules/common/header/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider as StoreProvider } from "react-redux";
import { store } from "src/store/root-store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider store={store}>
      <Header />
      <Component {...pageProps} />
    </StoreProvider>
  );
}
