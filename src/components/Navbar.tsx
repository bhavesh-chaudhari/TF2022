import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const router = useRouter();
  const navEl = useRef(null);

  const links = [
    {
      id: 1,
      path: "/",
      name: "home",
    },
    {
      id: 2,
      path: "/events",
      name: "Events",
    },
    {
      id: 3,
      path: "/about-us",
      name: "About Us",
    },
  ];

  useEffect(() => {
    console.log("navbar", window.scrollY, window.innerHeight);

    if (router.pathname === "/") {
      (navEl as any).current.style.visibility = "hidden";
      (navEl as any).current.style.opacity = 0;

      const onScroll = (event: Event) => {
        if (window.scrollY > window.innerHeight) {
          (navEl as any).current.style.visibility = "visible";
          (navEl as any).current.style.opacity = 1;
          (navEl as any).current.classList.add(styles["fadeIn"]);
        } else {
          (navEl as any).current.classList.remove(styles["fadeIn"]);
          (navEl as any).current.style.visibility = "hidden";
          (navEl as any).current.style.opacity = 0;
        }
      };

      window.addEventListener("scroll", onScroll);

      return () => {
        window.removeEventListener("scroll", onScroll);
      };
    } else {
      (navEl as any).current.style.visibility = "visible";
      (navEl as any).current.style.opacity = 1;
    }
  }, [router.pathname]);

  return (
    <div ref={navEl} className={styles["navbar-container"]}>
      <nav className={styles["navbar"]}>
        <Link href={"/"} passHref>
          <a className={styles["nav-logo"]}>
            <div className={styles["img"]}>
              <Image
                src="/media/logo.png"
                alt="Tantrafiesta Logo"
                layout="fill"
              ></Image>
            </div>
            <div className={styles["title"]}>
              <h2>TantraFiesta 2022</h2>
            </div>
          </a>
        </Link>
        <div
          onClick={() => setShow((prevState) => !prevState)}
          className={
            show
              ? `${styles["hamburger-btn"]} ${styles["open"]}`
              : styles["hamburger-btn"]
          }
        >
          <div className={styles["hamburger"]}></div>
        </div>
        <div
          className={
            show
              ? styles["nav-links"]
              : `${styles["nav-links"]} ${styles["hide"]}`
          }
        >
          <ul>
            <li className={styles["menu-title"]}>Menu</li>
            {links.map((link) => {
              return (
                <li
                  key={link.id}
                  onClick={() => {
                    setShow((prevState) => !prevState);
                  }}
                  className={
                    router.pathname === link.path ? styles["active"] : ""
                  }
                >
                  <Link scroll={true} href={link.path} passHref>
                    <a>{link.name}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className={styles["mobile-menu-logo"]}>
            <div className={styles["mobile-menu-logo-content"]}>
              <Image
                src="/media/logo.png"
                height={100}
                width={100}
                alt="logo"
              ></Image>
              <hr />
              <p>Proudly Presented By IIITN</p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
