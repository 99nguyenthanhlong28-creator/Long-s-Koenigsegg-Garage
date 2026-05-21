"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import Header from "../../components/Header/header"; 
import Footer from "../../components/Footer/footer";
import styles from "./product.module.css";

const cars =[
  { id: 1, name: "JESKO ABSOLUT", price: "$3,400,000", remain: 2, hp: "1600", speed: "530", weight: "1390", engine: "5.0L V8 TWIN-TURBO", transmission: "9-SPEED LST", zeroToHundred: "2.5", img: "/hinh/KOENIGSEGG_JESKO_ABSOLUT.jpg" },
  { id: 2, name: "JESKO ATTACK", price: "$3,000,000", remain: 0, hp: "1600", speed: "480", weight: "1420", engine: "5.0L V8 TWIN-TURBO", transmission: "9-SPEED LST", zeroToHundred: "2.5", img: "/hinh/KOENIGSEGG_JESKO_ATTACK.jpg" },
  { id: 3, name: "GEMERA", price: "$1,700,000", remain: 5, hp: "1700", speed: "400", weight: "1850", engine: "2.0L 3-CYL TFG + E-MOTORS", transmission: "KDD DIRECT DRIVE", zeroToHundred: "1.9", img: "/hinh/KOENIGSEGG_JESKO_GEMERA.jpg" },
  { id: 4, name: "CC850", price: "$3,650,000", remain: 1, hp: "1385", speed: "400+", weight: "1385", engine: "5.0L V8 TWIN-TURBO", transmission: "ESS 9-SPEED MANUAL", zeroToHundred: "2.7", img: "/hinh/KOENIGSEGG_JESKO_CC850.jpg" },
  { id: 5, name: "REGERA", price: "$2,000,000", remain: 0, hp: "1500", speed: "410", weight: "1590", engine: "5.0L V8 + 3 E-MOTORS", transmission: "KDD DIRECT DRIVE", zeroToHundred: "2.8", img: "/hinh/KOENIGSEGG_JESKO_REGERA.jpg" },
  { id: 6, name: "AGERA RS", price: "$2,500,000", remain: 3, hp: "1160", speed: "447", weight: "1395", engine: "5.0L V8 TWIN-TURBO", transmission: "7-SPEED PADDLE SHIFT", zeroToHundred: "2.8", img: "/hinh/KOENIGSEGG AGERA RS.webp" },
  { id: 7, name: "ONE:1", price: "$4,000,000", remain: 0, hp: "1360", speed: "440", weight: "1360", engine: "5.0L V8 TWIN-TURBO", transmission: "7-SPEED DUAL CLUTCH", zeroToHundred: "2.8", img: "/hinh/KOENIGSEGG_ONE1.webp" },
  { id: 8, name: "CCXR TREVITA", price: "$4,800,000", remain: 1, hp: "1018", speed: "410+", weight: "1280", engine: "4.8L V8 SUPERCHARGED", transmission: "6-SPEED MANUAL/AUTO", zeroToHundred: "2.9", img: "/hinh/KOENIGSEGG_CCXR_TREVITA.jpg" },
  { id: 9, name: "AGERA R", price: "$2,100,000", remain: 2, hp: "1140", speed: "440", weight: "1435", engine: "5.0L V8 TWIN-TURBO", transmission: "7-SPEED DUAL CLUTCH", zeroToHundred: "2.8", img: "/hinh/KOENIGSEGG_AGERA_R.jpg" },
  { id: 10, name: "CCX", price: "$1,200,000", remain: 4, hp: "806", speed: "395", weight: "1280", engine: "4.7L V8 TWIN SUPERCHARGED", transmission: "6-SPEED MANUAL", zeroToHundred: "3.2", img: "/hinh/KOENIGSEGG_CCX.jpg" },
  { id: 11, name: "CCR", price: "$900,000", remain: 0, hp: "806", speed: "388", weight: "1180", engine: "4.7L V8 TWIN SUPERCHARGED", transmission: "6-SPEED MANUAL", zeroToHundred: "3.2", img: "/hinh/KOENIGSEGG_CCR.webp" },
  { id: 12, name: "CC8S", price: "$800,000", remain: 7, hp: "655", speed: "390", weight: "1175", engine: "4.7L V8 SUPERCHARGED", transmission: "6-SPEED MANUAL", zeroToHundred: "3.5", img: "/hinh/KOENIGSEGG_CC8S.jpg" },
];

export default function ProductDetail() {
  const params = useParams(); 
  const carId = Number(params.id); 
  const car = cars.find((c) => c.id === carId);

  if (!car) {
    return (
      <div className={styles.notFound}>
        <div className={styles.notFoundGlass}>
          <h1>404</h1>
          <p>CLASSIFIED MODEL NOT FOUND</p>
          <Link href="/">RETURN TO SHOWROOM</Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <Header />

      {/* 1. CINEMATIC HERO (Ảnh bìa Parallax + Chữ bay vào) */}
      <section className={styles.productHero} style={{ backgroundImage: `url('${car.img}')` }}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h2 className={styles.heroEyebrow}>MEGACAR SERIES</h2>
          <h1 className={styles.carName}>{car.name}</h1>
          <p className={styles.heroSubtitle}>THE APEX OF HUMAN ENGINEERING</p>
        </div>
        <div className={styles.scrollIndicator}>
          <span>SCROLL TO EXPLORE</span>
          <div className={styles.mouse}></div>
        </div>
      </section>

      {/* 2. AEROSPACE DASHBOARD (Lưới thông số ngầu lòi) */}
      <section className={styles.dashboardSection}>
        <div className={styles.dashboardGrid}>
          <div className={styles.dashItem}>
            <span className={styles.dashValue}>{car.hp}<small>BHP</small></span>
            <span className={styles.dashLabel}>MAXIMUM POWER</span>
          </div>
          <div className={styles.dashItem}>
            <span className={styles.dashValue}>{car.speed}<small>KM/H</small></span>
            <span className={styles.dashLabel}>TOP SPEED</span>
          </div>
          <div className={styles.dashItem}>
            <span className={styles.dashValue}>{car.zeroToHundred}<small>SEC</small></span>
            <span className={styles.dashLabel}>0 - 100 KM/H</span>
          </div>
          <div className={styles.dashItem}>
            <span className={styles.dashText}>{car.engine}</span>
            <span className={styles.dashLabel}>POWERTRAIN</span>
          </div>
          <div className={styles.dashItem}>
            <span className={styles.dashText}>{car.transmission}</span>
            <span className={styles.dashLabel}>TRANSMISSION</span>
          </div>
          <div className={styles.dashItem}>
            <span className={styles.dashValue}>{car.weight}<small>KG</small></span>
            <span className={styles.dashLabel}>CURB WEIGHT</span>
          </div>
        </div>
      </section>

      {/* 3. STICKY STORYTELLING (Ảnh đứng yên, chữ cuộn - ĐỈNH CAO UI) */}
      <section className={styles.stickySection}>
        <div className={styles.stickyImageContainer}>
          <img src={car.img} alt={car.name} className={styles.stickyImg} />
          <div className={styles.imageVignette}></div>
        </div>
        
        <div className={styles.scrollingContent}>
          <div className={styles.storyBlock}>
            <div className={styles.lineIndicator}></div>
            <h2>AERODYNAMIC PERFECTION</h2>
            <p>Every curve and surface of the {car.name} is meticulously designed to cut through the air with zero drag. Handcrafted in Ängelholm, Sweden, it represents the absolute pinnacle of lightweight construction.</p>
          </div>
          
          <div className={styles.storyBlock}>
            <div className={styles.lineIndicator}></div>
            <h2>HEART OF A MONSTER</h2>
            <p>Equipped with a revolutionary {car.engine}, it delivers power instantly. The engineering team pushed the boundaries of physics to create a machine that redefines the hypercar segment.</p>
          </div>

          <div className={styles.storyBlock}>
            <div className={styles.lineIndicator}></div>
            <h2>THE COCKPIT</h2>
            <p>Immerse yourself in a symphony of analog craftsmanship and futuristic technology. The {car.name} ensures an unparalleled connection between man and machine.</p>
          </div>
        </div>
      </section>

      {/* 4. VIP RESERVATION GLASS CARD */}
      <section className={styles.vipSection}>
        {/* Lấy ảnh làm mờ làm background cho khu vực này */}
        <div className={styles.vipBackground} style={{ backgroundImage: `url('${car.img}')` }}></div>
        
        <div className={styles.glassCard}>
          <h3 className={styles.glassTitle}>EXCLUSIVE ALLOCATION</h3>
          <h2 className={styles.glassCarName}>{car.name}</h2>
          <div className={styles.glassPrice}>{car.price}</div>
          
          <div className={styles.glassRemain}>
            {car.remain > 0 ? (
              <span className={styles.statusOn}>AVAILABLE: {car.remain} BUILD SLOTS WORLDWIDE</span>
            ) : (
              <span className={styles.statusOff}>ALL PRODUCTION BUILD SLOTS SECURED</span>
            )}
          </div>
          
          <button className={styles.vipBtn} disabled={car.remain === 0}>
            {car.remain > 0 ? "REQUEST VIP CONFIGURATION" : "JOIN EXCLUSIVE WAITLIST"}
          </button>
          <p className={styles.vipNote}>*Subject to approval by Koenigsegg Automotive AB</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}