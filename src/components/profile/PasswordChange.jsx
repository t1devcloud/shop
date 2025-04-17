"use client"
import Image from "next/image";
import eyeOff from "@/public/assets/svg/eye-off.svg";
import eyeOn from "@/public/assets/svg/eye-on.svg";
import check from "@/public/assets/svg/check-green-outline.svg";
import { useState } from "react";

export default function PasswordChange() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <>
      <section className="change-password px-24">
        <h4 className="mb-24">The new password must be different from the current password</h4>
        <div className="mb-16">
          <label htmlFor="cpass">Password</label>
          <div className="position-relative">
            <input type={showPassword ? 'text' : 'password'} id="cpass" placeholder="Enter your password" className="input-psswd input-field d-block"/>
            <button type="button" className="eye-btn" onClick={() => setShowPassword(!showPassword)}>
              <span className={`eye-off ${showPassword ? 'd-none' : ''}`}>
                <Image src={eyeOff} alt="Eye Off"/>
              </span>
              <span className={`eye-on ${showPassword ? '' : 'd-none'}`}>
                <Image src={eyeOn} alt="Eye Off"/>
              </span>
            </button>
          </div>
        </div>
        <ul className="mb-16">
          <li className="d-flex gap-04">
            <Image src={check} alt="icon"/>
            <p>There must be at least 8 characters</p>
          </li>
          <li className="d-flex gap-04">
            <Image src={check} alt="icon"/>
            <p>There must be a unique code like @!#
            </p>
          </li>
        </ul>
        <div>
          <label htmlFor="ccpass">Confirm Password</label>
          <div className="position-relative">
            <input type={showConfirmPassword ? 'text' : 'password'} id="ccpass" placeholder="Confirm your password" className="input-psswd input-field d-block"/>
            <button type="button" className="eye-btn" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
              <span className={`eye-off ${showConfirmPassword ? 'd-none' : ''}`}>
                <Image src={eyeOff} alt="Eye Off"/>
              </span>
              <span className={`eye-on ${showConfirmPassword ? '' : 'd-none'}`}>
                <Image src={eyeOn} alt="Eye Off"/>
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* submit-btn start */}
      <div className="submit-btn px-24 pt-24 pb-36 bottom-btn">
        <button type="button" className="btn-primary">Submit</button>
      </div>
      {/* submit-btn end */}
    </>
  )
}
