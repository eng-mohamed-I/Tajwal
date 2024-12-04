import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={`${styles.footer} text-white`}>
      <div className={styles.container}>
        <div className={styles.right}>جميع الحقوق محفوظة</div>

        <div className={styles.left}>
          <a href="#" className={styles.link}>
            سياسية الخصوصية
          </a>
          <a href="#" className={styles.link}>
            سياسية الاستخدام
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
