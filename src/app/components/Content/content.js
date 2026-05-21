import styles from "./content.module.css";

export default function Content() {
  return (
    <>
      <section className={styles.specs}>
        <div className={styles.specItem}>
          <span className={styles.specValue}>1600</span>
          <span className={styles.specLabel}>BHP (ON E85)</span>
        </div>
        <div className={styles.specItem}>
          <span className={styles.specValue}>1500</span>
          <span className={styles.specLabel}>NM TORQUE</span>
        </div>
        <div className={styles.specItem}>
          <span className={styles.specValue}>5.0</span>
          <span className={styles.specLabel}>L V8 TWIN TURBO</span>
        </div>
        <div className={styles.specItem}>
          <span className={styles.specValue}>0.278</span>
          <span className={styles.specLabel}>CD DRAG</span>
        </div>
      </section>

      <section className={styles.feature}>
        <div className={styles.featureText}>
          <h2>DESIGNED FOR TOP SPEED</h2>
          <p>
            The Jesko Absolut is destined to achieve higher, more extraordinary speeds than any 
            fully homologated car before it. With a drag coefficient of only 0.278 Cd, combined 
            with its high-speed stability optimized aero features and daily drive friendly 
            characteristics, it is a land-based rocket-ship determined to reach unheard-of pace.
          </p>
          <button className={styles.outlineBtn}>READ THE STORY</button>
        </div>
        <div className={styles.featureImage}>
          <img src="/hinh/KOENIGSEGG_JESKO_ATTACK.jpg" alt="Jesko Absolut Detail" />
        </div>
      </section>
    </>
  );
}