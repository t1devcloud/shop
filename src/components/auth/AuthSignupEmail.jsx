"use client"

import { useState } from 'react';
import Image from 'next/image'
import arrow from "@/public/assets/svg/arrow-left-black.svg"
import eyeOff from "@/public/assets/svg/eye-off.svg"
import eyeOn from "@/public/assets/svg/eye-on.svg"
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function AuthSignupEmail() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();

  const handleBack = () => {
		router.back();
	};

  const togglePasswordView = () => {
    setShowPassword(!showPassword)
  }

  const toggleConfirmPasswordView = () => {
    setShowConfirmPassword(!showConfirmPassword)
  }

  return (
    <section className="auth signin-email">
      <div className="page-title">
        <button type="button" onClick={handleBack} className="back-btn back-page-btn d-flex align-items-center justify-content-center rounded-full">
          <Image src={arrow} alt="Icon"/>
        </button>
        <h3 className="main-title">Sign Up</h3>
      </div>
  
      <div className="heading">
        <h2>Complet your account</h2>
        <p>Lorem ipsum dolor sit amet</p>
      </div>
      <div className="auth-form">
        <form action="#">
          <div className="d-flex flex-column gap-16">
            <div>
              <label htmlFor="fname">First Name</label>
              <input type="text" id="fname" placeholder="Enter your first name" className="input-field d-block"/>
            </div>
            <div>
              <label htmlFor="lname">Last Name</label>
              <input type="text" id="lname" placeholder="Enter your last name" className="input-field d-block"/>
            </div>
            <div>
              <label htmlFor="remail2">Email Address</label>
              <input type="email" id="remail2" placeholder="Enter your email address" className="input-field d-block"/>
            </div>
            <div>
              <label htmlFor="rpass">Password</label>
              <div className="position-relative">
                <input id="rpass" type={showPassword ? 'text' : 'password'} placeholder="Enter your password" className="input-psswd input-field d-block"/>
                  <button type="button" className="eye-btn" onClick={togglePasswordView}>
                    <span className={`eye-off ${showPassword ? 'd-none' : ''}`}>
                      <Image src={eyeOff} alt="Eye Off"/>
                    </span>
                    <span className={`eye-on ${showPassword ? '' : 'd-none'}`}>
                      <Image src={eyeOn} alt="Eye Off"/>
                    </span>
                  </button>
              </div>
            </div>
            <div>
              <label htmlFor="rcpass">Confirm Password</label>
              <div className="position-relative">
                <input id="rcpass" type={showConfirmPassword ? 'text' : 'password'} placeholder="Confirm your password" className="input-psswd input-field d-block"/>
                <button type="button" className="eye-btn" onClick={toggleConfirmPasswordView}>
                    <span className={`eye-off ${showConfirmPassword ? 'd-none' : ''}`}>
                      <Image src={eyeOff} alt="Eye Off"/>
                    </span>
                    <span className={`eye-on ${showConfirmPassword ? '' : 'd-none'}`}>
                      <Image src={eyeOn} alt="Eye Off"/>
                    </span>
                  </button>
              </div>
            </div>
          </div>
          <Link href="/auth/enter-otp" className="btn-primary">Sign Up</Link>
        </form>
  
        <h6>Already have an account? <Link href="/auth/signin">Login</Link></h6>
      </div>
    </section>
  )
}
