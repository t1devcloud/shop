"use client"

import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
import google from '@/public/assets/svg/icon-google.svg'
import apple from '@/public/assets/svg/icon-apple.svg'
import LoginSuccessModal from '@/components/modals/LoginSuccessModal'

export default function AuthSignup() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <section className="auth signin">
        <div className="heading">
          <h2>Create account</h2>
          <p>Lorem ipsum dolor sit amet</p>
        </div>
    
        <div className="form-area auth-form">
          <form action="#">
            <div>
              <label htmlFor="remail1">Email</label>
              <input type="email" id="remail1" placeholder="Enter your email address" className="input-field"/>
            </div>
            <Link href="/auth/signup-email" className="btn-primary">Continue with Email</Link>
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
    
          <h6>Already have an account? <Link href="/auth/signin">Login</Link></h6>
        </div>
      </section>

      {/* login success modal start */}
      <LoginSuccessModal handleClose={handleClose} show={show}/>
      {/* login success modal end */}
    </>
  )
}
