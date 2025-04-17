"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";
import arrow from "@/public/assets/svg/arrow-left-black.svg"
import Link from "next/link";
import eyeOff from "@/public/assets/svg/eye-off.svg"
import eyeOn from "@/public/assets/svg/eye-on.svg"
import { useState } from "react";

export default function CreateNewPass() {
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
    <section className="auth signin-email create-pass">
      <div className="page-title text-center">
        <button type="button" onClick={handleBack} className="d-flex align-items-center justify-content-center rounded-full">
          <Image src={arrow} alt="Icon"/>
        </button>
      </div>
  
      <div className="heading">
        <h2>Create a
          New Password</h2>
        <p>Enter your new password</p>
      </div>
  
      <div className="auth-form">
        <form action="#">
          <div className="d-flex flex-column gap-16">
            <div>
              <label htmlFor="cpass">Password</label>
              <div className="position-relative">
                <input type={showPassword ? 'text' : 'password'} id="cpass" data-pssws-shown="false" placeholder="Enter your password" className="input-psswd input-field d-block"/>
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
              <label htmlFor="ccpass">Confirm Password</label>
              <div className="position-relative">
                <input type={showConfirmPassword ? 'text' : 'password'} id="ccpass" data-pssws-shown="false" placeholder="Confirm your password" className="input-psswd input-field d-block"/>
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
          <Link href="/auth/select-language" className="btn-primary">Continue</Link>
        </form>
      </div>
    </section>
  )
}
