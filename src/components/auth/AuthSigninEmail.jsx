"use client"

"use client"

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import arrow from "@/public/assets/svg/arrow-left-black.svg"
import eyeOff from "@/public/assets/svg/eye-off.svg"
import eyeOn from "@/public/assets/svg/eye-on.svg"
import google from '@/public/assets/svg/icon-google.svg'
import apple from '@/public/assets/svg/icon-apple.svg'
import LoginSuccessModal from "@/components/modals/LoginSuccessModal";
import { useRouter } from "next/navigation";

export default function AuthSigninEmail() {
  const [show, setShow] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const togglePasswordView = () => {
    setShowPassword(!showPassword)
  }

	const handleBack = () => {
		router.back();
	};

  return (
    <>
      <section className="auth signin-email">
        <div className="page-title text-center">
          <button type="button" onClick={handleBack} className="back-btn back-page-btn d-flex align-items-center justify-content-center rounded-full">
            <Image src={arrow} alt="Icon"/>
          </button>
          <h3 className="main-title">Sign In</h3>
        </div>
        <div className="auth-form">
          <form action="#">
            <div className="d-flex flex-column gap-16">
              <div>
                <label htmlFor="lemail2">Email Address</label>
                <input type="email" id="lemail2" placeholder="Enter your email address" className="input-field d-block"/>
              </div>
              <div>
                <label htmlFor="lpass">Password</label>
                <div className="position-relative">
                  <input type={showPassword ? 'text' : 'password'} id="lpass" placeholder="Enter your password" className="input-psswd input-field d-block"/>
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
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-8">
                  <input type="checkbox" id="lremember" className="input-field-checkbox d-block"/>
                  <label htmlFor="lremember" className="checkbox-label">Remember Me</label>
                </div>
                <Link href="/auth/forgot-password" className="fs-14 fw-600 forgot-pass d-inline-block">Forgot Password</Link>
              </div>
            </div>
            <Link href="/auth/enter-otp" className="btn-primary">Sign In</Link>
          </form>
    
          <div className="divider d-flex align-items-center justify-content-center gap-12">
            <span className="d-inline-block"></span>
            <small className="d-inline-block">Or continue with</small>
            <span className="d-inline-block"></span>
          </div>
    
          <div className="d-flex flex-column gap-16">
            <button type="button" className="social-btn" onClick={handleShow}>
              <Image src={google} alt="Google"/>
              Continue with Google
            </button>
            <button type="button" className="social-btn apple" onClick={handleShow}>
              <Image src={apple} alt="Apple"/>
              Continue with Apple
            </button>
          </div>
    
          <h6>Don’t have an account? <Link href="/auth/signup">Sign Up</Link></h6>
        </div>
      </section>

      {/* login success modal start */}
      <LoginSuccessModal handleClose={handleClose} show={show}/>
      {/* login success modal end */}
    </>
  )
}
