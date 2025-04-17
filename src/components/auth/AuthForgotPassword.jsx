"use client"

import Image from 'next/image'
import arrow from "@/public/assets/svg/arrow-left-black.svg";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function AuthForgotPassword() {
  const router = useRouter();
  const handleBack = () => {
		router.back();
	};

  return (
    <section className="auth signin-email forgot-pass">
      <div className="page-title">
        <button type="button" onClick={handleBack} className="back-btn back-page-btn d-flex align-items-center justify-content-center rounded-full">
          <Image src={arrow} alt="Icon"/>
        </button>
      </div>
  
      <div className="heading">
        <h2>Forgot Password</h2>
        <p>Recover your account password</p>
      </div>
  
      <div className="auth-form">
        <form action="#">
          <div>
            <label htmlFor="femail">Email</label>
            <input type="email" id="femail" placeholder="Enter your email" className="input-field"/>
          </div>
          <Link href="/auth/create-new-password" className="btn-primary">Continue</Link>
        </form>
      </div>
    </section>
  )
}
