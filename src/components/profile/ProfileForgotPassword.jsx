"use client"

import Image from 'next/image'
import icon from "@/public/assets/svg/i.svg"
import { useState } from 'react'

export default function ProfileForgotPassword() {
  const [email, setEmail] = useState('example@mail.com')

  const handleChange = (e) => {
    setEmail(e.target.value)
  }

  return (
    <>
      {/* forgot-password start */}
      <section className="user-info forgot-password px-24">
        <blockquote className="d-flex align-items-center gap-16 p-16 radius-8">
          <Image src={icon} alt="icon"/>
          <p>We will send the OTP code to your email for security in forgetting your password</p>
        </blockquote>

        <div className="mt-24">
          <label className="input-label">E-mail</label>
          <input type="text" placeholder="E-mail" value={email} className="input" onChange={(e) => handleChange(e)}/>
        </div>
      </section>
      {/* forgot-password end */}

      {/* submit-btn start */}
      <div className="submit-btn px-24 pt-24 pb-36 bottom-btn">
        <button type="button" className="btn-primary">Submit</button>
      </div>
      {/* submit-btn end */}
    </>
  )
}
