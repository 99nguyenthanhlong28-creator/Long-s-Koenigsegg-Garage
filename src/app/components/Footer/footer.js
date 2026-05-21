"use client";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.newsletter}>
          <h2>STAY UP TO SPEED</h2>
          <p>Subscribe to the Koenigsegg newsletter to receive the latest news, updates and exclusive offers.</p>
          <form className={styles.subscribeForm} onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="YOUR EMAIL ADDRESS" required />
            <button type="submit">SUBSCRIBE</button>
          </form>
        </div>
      </div>
      <div className={styles.footerMiddle}>
        <div className={styles.footerCol}>
          <h4>MODELS</h4>
          <a href="#">Jesko Absolut</a>
          <a href="#">Jesko Attack</a>
          <a href="#">Gemera</a>
          <a href="#">CC850</a>
        </div>
        <div className={styles.footerCol}>
          <h4>COMPANY</h4>
          <a href="#">About Us</a>
          <a href="#">Careers</a>
          <a href="#">Press Room</a>
          <a href="#">Sustainability</a>
        </div>
        <div className={styles.footerCol}>
          <h4>CONNECT</h4>
          <a href="#">Instagram</a>
          <a href="#">YouTube</a>
          <a href="#">Facebook</a>
          <a href="#">LinkedIn</a>
        </div>
        <div className={styles.footerCol}>
          <h4>HEADQUARTERS</h4>
          <p>Koenigsegg Automotive AB</p>
          <p>Valhall Park</p>
          <p>262 74 Ängelholm, Sweden</p>
          <a href="mailto:info@koenigsegg.com" className={styles.emailLink}>info@koenigsegg.com</a>
        </div>
      </div>
      <div className={styles.hugeLogoWrapper}>
        <h1 className={styles.hugeLogo}>KOENIGSEGG</h1>
      </div>
      <div className={styles.footerBottom}>
        <p>© 2026 Koenigsegg Automotive AB. All rights reserved.</p>
        <div className={styles.legalLinks}>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
          <a href="#">Cookies</a>
        </div>
      </div>
    </footer>
  );
}