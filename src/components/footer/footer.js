import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer>
      {/* Sub Footer Section */}
      <div className={`container-fluid ${styles.subFooter}`}>
        <div className="container-fluid ">
          <div className="row align-items-center justify-content-between">
            {/* Logo and Description */}
            <div className="col-md-4 d-flex align-items-start gap-3 mb-3 mb-md-0 ">
              <img
                src="4b9052cac19f6a2ec01702651c6ee254.png"
                alt="Logo"
                style={{ width: "75px", height: "75px" }}
              />
              <div className="text-secondary">
                <small>
                  <span className={`fw-bold ${styles.mediumFont}`}>
                    شركة تجوال العالم للتجارة
                  </span>
                  <br />
                  <span className={styles.smallFont}>
                    هي أول شركة سعودية مسجلة متخصصه في بيع شرائح التجوال
                    الالكترونية في السعودية، و مرخصة بالسجل التجاري رقم
                    7041398541
                  </span>
                </small>
              </div>
            </div>

            {/* App Download Section */}
            <div className="col-md-4 text-center mb-3 mb-md-0">
              <p className={` ${styles.mediumFont} text-secondary fw-bold`}>
                حمل التطبيق
              </p>
              <img
                src="barCodeFooter.png"
                alt="App QR Code"
                className="img-fluid"
              />
            </div>

            {/* Site Map */}
            <div className="col-md-4 text-secondary text-center">
              <small className={` ${styles.mediumFont} fw-bold`}>
                خريطة الموقع
              </small>
              <div className={`row mt-2 ${styles.smallFont}`}>
                <div className="col-6">
                  <small>البداية</small>
                  <br />
                  <small>الدول</small>
                  <br />
                  <small>العروض</small>
                </div>
                <div className="col-6">
                  <small>دخول</small>
                  <br />
                  <small>تسجيل</small>
                  <br />
                  <small>خدمة العملاء</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Section */}
      <div className={`${styles.footer} text-white py-3`}>
        <div className="container d-flex flex-wrap justify-content-between align-items-center">
          {/* Rights Reserved */}
          <div className={styles.right}>
            <small className={styles.smallFont}>جميع الحقوق محفوظة</small>
          </div>

          {/* Links */}
          <div className={styles.left}>
            <a href="#" className={styles.link}>
              سياسية الخصوصية
            </a>
            <a href="#" className={styles.link}>
              سياسية الاستخدام
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
