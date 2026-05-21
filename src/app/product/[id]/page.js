"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import styles from "./product.module.css";

const cars =[
  { id: 1, name: "JESKO ABSOLUT", price: "$3,400,000", remain: 2, hp: "1600", speed: "530", weight: "1390", engine: "5.0L V8 TWIN-TURBO", transmission: "9-SPEED LST", zeroToHundred: "2.5", img: "/hinh/KOENIGSEGG_JESKO_ABSOLUT.jpg" },
  { id: 2, name: "JESKO ATTACK", price: "$3,000,000", remain: 0, hp: "1600", speed: "480", weight: "1420", engine: "5.0L V8 TWIN-TURBO", transmission: "9-SPEED LST", zeroToHundred: "2.5", img: "/hinh/KOENIGSEGG_JESKO_ATTACK.jpg" },
  { id: 3, name: "GEMERA", price: "$1,700,000", remain: 5, hp: "1700", speed: "400", weight: "1850", engine: "2.0L 3-CYL TFG + E-MOTORS", transmission: "KDD DIRECT DRIVE", zeroToHundred: "1.9", img: "/hinh/KOENIGSEGG_GEMERA.jpg" },
  { id: 4, name: "CC850", price: "$3,650,000", remain: 1, hp: "1385", speed: "400+", weight: "1385", engine: "5.0L V8 TWIN-TURBO", transmission: "ESS 9-SPEED MANUAL", zeroToHundred: "2.7", img: "/hinh/KOENIGSEGG_CC850.jpg" },
  { id: 5, name: "REGERA", price: "$2,000,000", remain: 0, hp: "1500", speed: "410", weight: "1590", engine: "5.0L V8 + 3 E-MOTORS", transmission: "KDD DIRECT DRIVE", zeroToHundred: "2.8", img: "/hinh/KOENIGSEGG_REGERA.jpg" },
  { id: 6, name: "AGERA RS", price: "$2,500,000", remain: 3, hp: "1160", speed: "447", weight: "1395", engine: "5.0L V8 TWIN-TURBO", transmission: "7-SPEED PADDLE SHIFT", zeroToHundred: "2.8", img: "/hinh/KOENIGSEGG_AGERA RS.webp" },
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
        <h1>404 | KHÔNG TÌM THẤY SẢN PHẨM</h1>
        <Link href="/">QUAY LẠI TRANG CHỦ</Link>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <Header />

      <main className={styles.mainContainer}>
        {/* Đường dẫn Breadcrumb chuẩn TMĐT */}
        <div className={styles.breadcrumb}>
          <Link href="/">Trang chủ</Link> <span>›</span> <Link href="#">Siêu xe Hypercar</Link> <span>›</span> <span className={styles.current}>{car.name}</span>
        </div>

        {/* Khối Top: Ảnh & Thông tin đặt hàng */}
        <div className={styles.productTop}>
          
          {/* Cột trái: Ảnh sản phẩm */}
          <div className={styles.imageGallery}>
            <img src={car.img} alt={car.name} />
          </div>

          {/* Cột phải: Giá, Khuyến mãi & Nút mua */}
          <div className={styles.productInfo}>
            <h1 className={styles.carName}>{car.name}</h1>
            
            <div className={styles.priceRow}>
              <span className={styles.price}>{car.price}</span>
              {car.remain > 0 ? (
                <span className={styles.badgeRemain}>Còn {car.remain} suất</span>
              ) : (
                <span className={styles.badgeSold}>Ngừng nhận cọc</span>
              )}
            </div>

            {/* Box Khuyến mãi y hệt DMX nhưng mạ Vàng */}
            <div className={styles.promoBox}>
              <div className={styles.promoHeader}>🎁 Ưu đãi độc quyền khi đặt trước</div>
              <ul className={styles.promoList}>
                <li>Tặng gói bảo dưỡng toàn cầu 5 năm miễn phí tận nhà.</li>
                <li>Tặng kèm đồng hồ Koenigsegg x Jacob & Co phiên bản giới hạn.</li>
                <li>Vận chuyển xe toàn cầu miễn phí bằng chuyên cơ chuyên dụng.</li>
                <li>Tham gia câu lạc bộ Koenigsegg Ghost Squadron VIP.</li>
              </ul>
            </div>

            {/* Nút bấm chốt đơn đặc trưng DMX chia 2 dòng */}
            <button className={styles.buyBtn} disabled={car.remain === 0}>
              {car.remain > 0 ? (
                <>
                  <strong>ĐẶT CỌC NGAY</strong>
                  <span>Giao xe tận nơi, hỗ trợ thủ tục hải quan toàn cầu</span>
                </>
              ) : (
                <>
                  <strong>ĐĂNG KÝ DANH SÁCH CHỜ</strong>
                  <span>Hệ thống sẽ liên hệ khi có suất mua lại</span>
                </>
              )}
            </button>
            
            {/* Nếu còn hàng, thêm nút Trả góp */}
            {car.remain > 0 && (
              <div className={styles.installmentRow}>
                <button className={styles.installBtn}>
                  <strong>TRẢ GÓP QUA THẺ ĐEN</strong>
                  <span>Visa, MasterCard, Amex</span>
                </button>
                <button className={styles.installBtn}>
                  <strong>TRẢ GÓP QUA CÔNG TY TÀI CHÍNH</strong>
                  <span>Duyệt hồ sơ VIP trong 15 phút</span>
                </button>
              </div>
            )}

            {/* Chính sách bảo hành */}
            <div className={styles.supportInfo}>
              <p>📞 Tổng đài VIP: <strong>1800.KGG (Miễn phí)</strong></p>
              <p>🛡️ Bảo hành chính hãng toàn cầu, chuyên gia bay đến tận nơi</p>
              <p>🔄 Hỗ trợ thu cũ đổi mới siêu xe các hãng khác</p>
            </div>
          </div>
        </div>

        {/* Khối Bottom: Bài viết mô tả & Thông số kỹ thuật */}
        <div className={styles.productBottom}>
          
          {/* Cột trái: Bài viết chuẩn DMX */}
          <div className={styles.articleSection}>
            <h2>Đặc điểm nổi bật của {car.name}</h2>
            <img src={car.img} alt="Detail" className={styles.articleImg}/>
            <p>
              Được mệnh danh là tuyệt tác cơ khí, <strong>{car.name}</strong> không chỉ là một phương tiện di chuyển mà còn là một tác phẩm nghệ thuật giới hạn. Mỗi chiếc xe được lắp ráp hoàn toàn thủ công tại nhà máy Ängelholm, Thụy Điển bởi các kỹ sư hàng đầu thế giới.
            </p>
            <h3>Khí động học tối thượng</h3>
            <p>
              Mọi đường nét trên thân xe đều được thiết kế để cắt qua không khí với lực cản thấp nhất, tạo ra lực ép xuống mặt đường (downforce) cực lớn giúp xe bám chặt ở vận tốc vượt ngưỡng 400 KM/H. Khung gầm sợi carbon nguyên khối đảm bảo độ cứng cáp tuyệt đối.
            </p>
            <button className={styles.readMoreBtn}>Đọc thêm bài viết ▼</button>
          </div>

          {/* Cột phải: Bảng thông số (Kẻ sọc Zebra) */}
          <div className={styles.specsSection}>
            <h2>Thông số kỹ thuật</h2>
            <ul className={styles.specsList}>
              <li>
                <span>Động cơ:</span> 
                <strong>{car.engine}</strong>
              </li>
              <li>
                <span>Công suất tối đa:</span> 
                <strong>{car.hp} HP</strong>
              </li>
              <li>
                <span>Tốc độ tối đa:</span> 
                <strong>{car.speed} KM/H</strong>
              </li>
              <li>
                <span>Tăng tốc 0-100 km/h:</span> 
                <strong>{car.zeroToHundred} giây</strong>
              </li>
              <li>
                <span>Hộp số:</span> 
                <strong>{car.transmission}</strong>
              </li>
              <li>
                <span>Trọng lượng bản thân:</span> 
                <strong>{car.weight} KG</strong>
              </li>
              <li>
                <span>Sản xuất tại:</span> 
                <strong>Thụy Điển</strong>
              </li>
              <li>
                <span>Năm ra mắt:</span> 
                <strong>2024</strong>
              </li>
            </ul>
            <button className={styles.viewMoreSpecs}>Xem cấu hình chi tiết</button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}