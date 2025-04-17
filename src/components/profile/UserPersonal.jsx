"use client"

import { useEffect, useState } from "react";
import Image from "next/image";
import { user_personal_data } from "@/public/data/profile-data";
import Link from "next/link";
import arrowRight from "@/public/assets/svg/chevron-right.svg";
import activity from "@/public/assets/svg/activity.svg";

export default function UserPersonal() {

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
    <section className="user-personal">
      {
        user_personal_data.map(({id, title, infoList}) => (
          <div className="mt-32" key={id}>
            <h4 className="mb-16">{title}</h4>
            <ul className="setting-list">
              {
                infoList.map(({id, icon, name, linkUrl, size}) => (
                  <li key={id}>
                    <Link href={linkUrl} className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center gap-12 shrink-0">
                        <Image src={icon} alt="icon"/>
                        <p>{name}</p>
                      </div>
          
                      {
                        size ? 
                        <small>{size}</small>
                        :
                        <Image src={arrowRight} alt="Icon"/>
                      }
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>
        ))
      }
      <ul>
        <li className="mt-32">

        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-12 shrink-0">
            <Image src={activity} alt="icon"/>
            <p className="mode-text">Dark Mode</p>
          </div>

          {/* <label className="toggle-switch" htmlFor="check-mode">
            <input type="checkbox" className="mode-switch" id="check-mode"/>
            <span className="slider"></span>
          </label> */}

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
    </section>
  )
}
