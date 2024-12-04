"use client";

import React from "react";
import styles from "./header.module.css";
import Link from "next/link";
import useState from "react";
const Header = () => {
  return (
    <header dir="rtl" className={styles.header}>
      <nav className={styles.navbar}>
        {/* Logo */}
        <div className={styles.logo}>
          تجوال <br /> Tajwal
        </div>

        {/* Nav Items */}
        <ul className={styles.navItems}>
          <li>
            <Link className="text-dark" href="#">
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
        </ul>

        {/* Login/Sign In */}
        <div className={styles.auth}>
          <button className={`${styles.loginBtn} rounded`}>دخول</button>
          <button className={`${styles.signinBtn} rounded`}>تسجيل</button>
        </div>
      </nav>
      <div className="text-center mt-5">
        <h2>ابقي متصلا اينما كنت</h2>
        <p>في اكثر من 200 دولة</p>
        <div className=" d-flex justify-content-center">
          <div className="col-lg-6">
            <input placeholder="ابحث" className="col-lg-12 form-control" />
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-4">
        <ul className={`${styles.navItems} text-center`}>
          <li>
            <Link className="bg-light px-5 py-2 text-black rounded" href="#">
              دولية
            </Link>
          </li>
          <li>
            <Link className=" px-5 py-2" href="#">
              قارية
            </Link>
          </li>
          <li>
            <Link className="px-5 py-2" href="#">
              عالمية
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
