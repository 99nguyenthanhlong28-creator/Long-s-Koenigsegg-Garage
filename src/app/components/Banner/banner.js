import styles from "./banner.module.css";

export default function Banner() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroOverlay}></div>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>JESKO ABSOLUT</h1>
        <p className={styles.heroSubtitle}>THE FASTEST KOENIGSEGG EVER MADE</p>
        <div className={styles.ctas}>
          <button className={styles.primaryBtn}>DISCOVER MORE</button>
          <button className={styles.secondaryBtn}>CONFIGURE</button>
        </div>
      </div>
    </section>
  );
}