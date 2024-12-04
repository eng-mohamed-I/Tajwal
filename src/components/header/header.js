"use client";

import React, { useState } from "react";
import styles from "./header.module.css";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        {/* Logo */}
        <div className={styles.logo}>
          <Link href="/">
            <img src="logo.png" alt="tajwal logo" />
          </Link>
        </div>

        {/* Hamburger Menu */}
        <div className={styles.hamburger} onClick={toggleMenu}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>

        {/* Nav Items */}
        <ul
          className={`${styles.navItems} ${isMenuOpen ? styles.showMenu : ""}`}
        >
          <li>
            <Link className={styles.pageLinks} href="#">
              البداية
            </Link>
          </li>
          <li>
            <Link href="#">الدول</Link>
          </li>
          <li>
            <Link href="#">العروض</Link>
          </li>
          <li>
            <Link href="#">مركز المساعدة</Link>
          </li>
          <li>
            <Link href="#">اتصل بنا</Link>
          </li>
          <li>
            <Link href="#">
              <small>english</small>
            </Link>
          </li>
          <li>
            <Link href="#">
              <small> ر.س</small>
            </Link>
          </li>

          {/* Login/Sign In */}
          <div className={styles.auth}>
            <button className={`${styles.loginBtn} rounded`}>دخول</button>
            <button className={`${styles.signupBtn} rounded`}>تسجيل</button>
          </div>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="text-center mt-5">
        <h2 className="fw-bold">ابقى متصلاً اينما كنت</h2>
        <p>في اكثر من 200 دولة</p>
        <div className="d-flex justify-content-center">
          <div className="col-lg-4">
            <input placeholder={`ابحث`} className="col-lg-12 form-control" />
          </div>
        </div>
      </div>

      <div className="containe mt-4">
        <div className="row d-flex justify-content-center text-center">
          <div className="col-4 ">
            <div className={` d-flex gap-2`}>
              <div className={`col-lg-4 bg-white p-2 ${styles.filterBtn}`}>
                دولية
              </div>
              <div className="col-lg-4">ثارية</div>
              <div className="col-lg-4">عالمية</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
