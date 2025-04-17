"use client"

import Image from "next/image";
import arrow from "@/public/assets/svg/arrow-left-black.svg";
import plusSquare from "@/public/assets/svg/plus-square.svg";
import plusOutline from "@/public/assets/svg/plus-outline.svg";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function PageTitle({title, link}) {
  const router = useRouter();
    
  const handleBack = () => {
    router.back();
  };

  return (
    <div className="page-title">
      <button onClick={handleBack} type="button" className="back-btn back-page-btn d-flex align-items-center justify-content-center rounded-full">
        <Image src={arrow} alt="arrow"/>
      </button>
      <h3 className="main-title">{title}</h3>
      {
        link &&
        <Link href={link} className={`plus-btn d-flex align-items-center justify-content-center ms-auto ${link === "/profile/add-card" ? 'rounded-full' : ''}`}>
          <Image src={link === "/profile/add-address" ? plusSquare : plusOutline} alt="icon"/>
        </Link>
      }
    </div>
  )
}
