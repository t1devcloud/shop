"use client"

import Image from "next/image";
import homeIcon from "@/public/assets/svg/bottom-nav/home.svg";
import homeIconActive from "@/public/assets/svg/bottom-nav/home-active.svg";
import categoryIcon from "@/public/assets/svg/bottom-nav/category.svg";
import categoryIconActive from "@/public/assets/svg/bottom-nav/category-active.svg";
import ticketIcon from "@/public/assets/svg/bottom-nav/ticket.svg";
import ticketIconActive from "@/public/assets/svg/bottom-nav/ticket-active.svg";
import heartIcon from "@/public/assets/svg/bottom-nav/heart.svg";
import heartIconActive from "@/public/assets/svg/bottom-nav/heart-active.svg";
import profileIcon from "@/public/assets/svg/bottom-nav/profile.svg";
import profileIconActive from "@/public/assets/svg/bottom-nav/profile-active.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();  

  return (
    <footer className="bottom-nav">
    <ul className="d-flex align-items-center justify-content-around w-100 h-100">
      <li>
        <Link href="/home" className={`link ${pathname === '/home' ? 'active' : ''}`}>
        {
          pathname === '/home' ? 
          <Image src={homeIconActive} alt="home"/>
          : 
          <Image src={homeIcon} alt="home"/>
        }
        </Link>
      </li>
      <li>
        <Link href="/explore" className={`link ${pathname === '/explore' ? 'active' : ''}`}>
        {
          pathname === '/explore' ?
          <Image src={categoryIconActive} alt="category"/>
          :
          <Image src={categoryIcon} alt="category"/>
        }
        </Link>
      </li>
      <li>
        <Link href="/ticket-booked" className={`link ${pathname === '/ticket-booked' ? 'active' : ''}`}>
        {
          pathname === '/ticket-booked' ?
          <Image src={ticketIconActive} alt="ticket"/>
          :
          <Image src={ticketIcon} alt="ticket"/>
        }
        </Link>
      </li>
      <li>
        <Link href="/wishlist" className={`link ${pathname === '/wishlist' ? 'active' : ''}`}>
        {
          pathname === '/wishlist' ?
          <Image src={heartIconActive} alt="heart"/>
          :
          <Image src={heartIcon} alt="heart"/>
        }
        </Link>
      </li>
      <li>
        <Link href="/profile/user-profile" className={`link ${pathname === '/profile/user-profile' ? 'active' : ''}`}>
        {
          pathname === '/profile/user-profile' ?
          <Image src={profileIconActive} alt="profile"/>
          :
          <Image src={profileIcon} alt="profile"/>
        }
        </Link>
      </li>
    </ul>
  </footer>
  )
}
