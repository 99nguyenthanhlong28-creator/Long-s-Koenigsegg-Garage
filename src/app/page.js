import Header from "./components/Header/header";
import Banner from "./components/Banner/banner";
import Content from "./components/Content/content";
import Products from "./components/Products/products";
import Footer from "./components/Footer/footer";

import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <Banner />
      <Content />
      <Products />
      <Footer />
    </div>
  );
}