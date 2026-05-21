import Link from "next/link";
import styles from "./products.module.css";

export default function Products() {
  // Mảng 12 siêu xe
  const cars =[
    { id: 1, name: "JESKO ABSOLUT", price: "$3,400,000", remain: 2, img: "/hinh/KOENIGSEGG_JESKO_ABSOLUT.jpg" },
    { id: 2, name: "JESKO ATTACK", price: "$3,000,000", remain: 0, img: "/hinh/KOENIGSEGG_JESKO_ATTACK.jpg" },
    { id: 3, name: "GEMERA", price: "$1,700,000", remain: 5, img: "/hinh/KOENIGSEGG_JESKO_GEMERA.jpg" },
    { id: 4, name: "CC850", price: "$3,650,000", remain: 1, img: "/hinh/KOENIGSEGG_JESKO_CC850.jpg" },
    { id: 5, name: "REGERA", price: "$2,000,000", remain: 0, img: "/hinh/KOENIGSEGG_JESKO_REGERA.jpg" },
    { id: 6, name: "AGERA RS", price: "$2,500,000", remain: 3, img: "/hinh/KOENIGSEGG AGERA RS.webp" },
    { id: 7, name: "ONE:1", price: "$4,000,000", remain: 0, img: "/hinh/KOENIGSEGG_ONE1.webp" },
    { id: 8, name: "CCXR TREVITA", price: "$4,800,000", remain: 1, img: "/hinh/KOENIGSEGG_CCXR_TREVITA.jpg" },
    { id: 9, name: "AGERA R", price: "$2,100,000", remain: 2, img: "/hinh/KOENIGSEGG_AGERA_R.jpg" },
    { id: 10, name: "CCX", price: "$1,200,000", remain: 4, img: "/hinh/KOENIGSEGG_CCX.jpg" },
    { id: 11, name: "CCR", price: "$900,000", remain: 0, img: "/hinh/KOENIGSEGG_CCR.webp" },
    { id: 12, name: "CC8S", price: "$800,000", remain: 7, img: "/hinh/KOENIGSEGG_CC8S.jpg" },
  ];

  return (
    <section className={styles.shopSection}>
      <div className={styles.shopHeader}>
        <h2>AVAILABLE INVENTORY</h2>
        <p>RESERVE YOUR HYPERCAR TODAY</p>
      </div>
      
      <div className={styles.shopGrid}>
        {cars.map((car) => (
          <div key={car.id} className={styles.carCard}>
            
            {/* 1. Bọc Link xung quanh ẢNH XE */}
            <Link href={`/product/${car.id}`}>
              <div className={styles.carImageWrapper}>
                <img src={car.img} alt={car.name} className={styles.carImage} />
              </div>
            </Link>

            <div className={styles.carInfo}>
              <div className={styles.carTitleRow}>
                <h3 className={styles.carName}>{car.name}</h3>
                {car.remain > 0 ? (
                  <span className={styles.remainBadge}>{car.remain} REMAIN</span>
                ) : (
                  <span className={`${styles.remainBadge} ${styles.soldOut}`}>SOLD OUT</span>
                )}
              </div>
              
              <p className={styles.carPrice}>{car.price}</p>

              {/* 2. Bọc Link xung quanh NÚT BẤM */}
              {/* Cho dù xe hết hàng vẫn cho phép bấm vào xem chi tiết (chỉ đổi text) */}
              <Link href={`/product/${car.id}`} style={{ textDecoration: 'none', width: '100%' }}>
                <button className={styles.buyBtn} disabled={car.remain === 0}>
                  {car.remain > 0 ? "VIEW DETAILS & RESERVE" : "SOLD OUT - DETAILS"}
                </button>
              </Link>
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}