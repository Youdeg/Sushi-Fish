import Head from "next/head";
import styles from "./styles/deliveryPage.module.scss";

const DeliveryPage = () => {
  return (
    <div className={styles.deliveryPage}>
      <Head>
      <title>SushiFish || Доставка</title>
      </Head>
      <div className={styles.text}>
        Delivery from 15€. Average delivery time - 1 hour. <br /> Pickup only
        from NoName street.
      </div>
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A116104dfd5baa7917774ef52a2a965d3e624e58c1f85d040dc28a07d3e88301c&amp;source=constructor"
        width="677"
        height="536"
      ></iframe>
    </div>
  );
};

export default DeliveryPage;
