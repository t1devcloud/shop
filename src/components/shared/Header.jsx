"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import menu from "@/public/assets/svg/menu/burger-white.svg";
import sun from "@/public/assets/svg/menu/sun-white.svg";
import moon from "@/public/assets/svg/menu/moon-white.svg";
import profile from "@/public/assets/svg/menu/profile-white.svg";
import close from "@/public/assets/svg/menu/close-white.svg";
import pie from "@/public/assets/svg/menu/pie-white.svg";
import arrowRight from "@/public/assets/svg/menu/chevron-right-black.svg";
import page from "@/public/assets/svg/menu/page-white.svg";
import grid from "@/public/assets/svg/menu/grid-white.svg";
import box from "@/public/assets/svg/menu/box-white.svg";
import back from "@/public/assets/svg/menu/back-white.svg";
import gear from "@/public/assets/svg/menu/gear-white.svg";
import avatar from "@/public/assets/images/profile/avatar.png";

export default function Header() {
  const [show, setShow] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };

  const toggleDarkMode = (darkModeStatus) => {
    document.body.classList.toggle("dark-mode", darkModeStatus);    
  };

  const handleChange = (event) => {
    const darkModeStatus = event.target.checked;
    setIsChecked(darkModeStatus);
    toggleDarkMode(darkModeStatus);
    localStorage.setItem("darkModeStatus", darkModeStatus.toString());
    toggleDarkMode(darkModeStatus)
    getChange();
  }

  const getChange = () => {
    const storedDarkModeStatus = JSON.parse(localStorage.getItem("darkModeStatus"));
    if (storedDarkModeStatus !== null) {
      setIsChecked(storedDarkModeStatus);
      toggleDarkMode(storedDarkModeStatus);
    }
  }

  useEffect(() => {
    getChange();
  }, []);

  return (
    <section className="wrapper dz-mode">
      {/* menu */}
      <div className="menu">
        <button className="toggle-btn" onClick={toggleShow}>
          <Image src={menu} alt="icon" className="icon" />
        </button>
        <div className="btn-grp d-flex align-items-center gap-16">
          <label
            className="mode-change d-flex align-items-center justify-content-center"
          >
            <input type="checkbox" checked={isChecked} onChange={(e) => handleChange(e)} />
            <Image src={isChecked ? sun : moon} alt="icon" className={isChecked ? 'sun' : 'moon'}/>
          </label>
          <Link href="/profile/user-profile">
            <Image src={profile} alt="icon" />
          </Link>
        </div>
      </div>
      <div
        className={`m-menu__overlay ${show ? "show" : ""}`}
        onClick={toggleShow}
      ></div>
      {/* main menu */}
      <div className={`m-menu ${show ? "show" : ""}`}>
        <div className="m-menu__header">
          <button className="m-menu__close" onClick={toggleShow}>
            <Image src={close} alt="icon" />
          </button>
          <div className="menu-user">
            <Image src={avatar} alt="avatar" />
            <div>
              <Link href="#!">angela mayer</Link>
              <h3>Verified user · Membership</h3>
            </div>
          </div>
        </div>
        <ul>
          <li>
            <h2 className="menu-title">menu</h2>
          </li>

          <li>
            <Link href="/home" onClick={toggleShow}>
              <div className="d-flex align-items-center gap-16">
                <span className="icon">
                  <Image src={pie} alt="" />
                </span>
                overview
              </div>
              <Image src={arrowRight} alt="" />
            </Link>
          </li>
          <li>
            <Link href="/all-pages" onClick={toggleShow}>
              <div className="d-flex align-items-center gap-16">
                <span className="icon">
                  <Image src={page} alt="" />
                </span>
                pages
              </div>
              <Image src={arrowRight} alt="" />
            </Link>
          </li>
          <li>
            <h2 className="menu-title">others</h2>
          </li>

          <li>
            <label className="a-label__chevron" htmlFor="item-4">
              <span className="d-flex align-items-center gap-16">
                <span className="icon">
                  <Image src={grid} alt="" />
                </span>
                components
              </span>
              <Image src={arrowRight} alt="" />
            </label>
            <input
              type="checkbox"
              id="item-4"
              name="item-4"
              className="m-menu__checkbox"
            />
            <div className="m-menu">
              <div className="m-menu__header">
                <label className="m-menu__toggle" htmlFor="item-4">
                  <Image src={back} alt="" />
                </label>
                <span className="m-menu__header-title">components</span>
              </div>
              <ul>
                <li>
                  <Link href="/splash-screen" onClick={toggleShow}>
                    <div className="d-flex align-items-center gap-16">
                      <span className="icon">
                        <Image src={box} alt="icon" />
                      </span>
                      splash screen
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <label className="a-label__chevron" htmlFor="item-5">
              <span className="d-flex align-items-center gap-16">
                <span className="icon">
                  <Image src={gear} alt="" />
                </span>
                settings
              </span>
              <Image src={arrowRight} alt="" />
            </label>
            <input
              type="checkbox"
              id="item-5"
              name="item-5"
              className="m-menu__checkbox"
            />
            <div className="m-menu">
              <div className="m-menu__header">
                <label className="m-menu__toggle" htmlFor="item-5">
                  <Image src={back} alt="" />
                </label>
                <span className="m-menu__header-title">settings</span>
              </div>
              <ul>
                <li>
                  <Link href="/profile/user-address" onClick={toggleShow}>
                    <div className="d-flex align-items-center gap-16">
                      <span className="icon">
                        <Image src={box} alt="icon" />
                      </span>
                      My Address
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/profile/user-payment" onClick={toggleShow}>
                    <div className="d-flex align-items-center gap-16">
                      <span className="icon">
                        <Image src={box} alt="icon" />
                      </span>
                      Payment Method
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/profile/change-password" onClick={toggleShow}>
                    <div className="d-flex align-items-center gap-16">
                      <span className="icon">
                        <Image src={box} alt="icon" />
                      </span>
                      Change Password
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/profile/forgot-password" onClick={toggleShow}>
                    <div className="d-flex align-items-center gap-16">
                      <span className="icon">
                        <Image src={box} alt="icon" />
                      </span>
                      Forgot Password
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/profile/security" onClick={toggleShow}>
                    <div className="d-flex align-items-center gap-16">
                      <span className="icon">
                        <Image src={box} alt="icon" />
                      </span>
                      Security
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/profile/user-language" onClick={toggleShow}>
                    <div className="d-flex align-items-center gap-16">
                      <span className="icon">
                        <Image src={box} alt="icon" />
                      </span>
                      Language
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/profile/notifications" onClick={toggleShow}>
                    <div className="d-flex align-items-center gap-16">
                      <span className="icon">
                        <Image src={box} alt="icon" />
                      </span>
                      Notifications
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="dz-switch">
            <div className="a-label__chevron">
              <div className="d-flex align-items-center gap-16">
                <span className="icon">
                  <Image src={moon} alt="" />
                </span>
                switch to dark mode
              </div>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  className="mode-switch"
                  checked={isChecked} onChange={(e) => handleChange(e)}
                />
                <span className={`slider ${isChecked ? 'active' : ''}`}></span>
              </label>
            </div>
          </li>
        </ul>
      </div>
      {/* end main menu */}
    </section>
  );
}
