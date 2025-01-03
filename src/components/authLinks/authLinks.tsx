"use client";

import Link from "next/link";
import styles from "./authLinks.module.css";
import { useState, useEffect } from "react";

export default function AuthLinks() {
  const [open, setOpen] = useState(false);
  const status = "unauthenticated";

  // Close menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 780) {
        setOpen(false); // Close the menu on desktop
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {status === "unauthenticated" ? (
        <Link href="/login" className={styles.link}>Login</Link>
      ) : (
        <>
          <Link href="/write" className={styles.link}>Write</Link>
          <span>Logout</span>
        </>
      )}
      <div
        className={styles.hamburger}
        onClick={() => setOpen(!open)}
      >
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>

      {/* Responsive Menu Logic - Menu appears when 'open' is true */}
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">Homepage</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          {status === "unauthenticated" ? (
            <Link href="/" className={styles.link}>Login</Link>
          ) : (
            <>
              <Link href="/" >Write</Link>
              <span>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
}
