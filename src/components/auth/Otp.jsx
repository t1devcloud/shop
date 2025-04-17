"use client"

import Image from 'next/image'
import arrow from "@/public/assets/svg/arrow-left-black.svg"
import { useRef, useState } from 'react';
import LoginSuccessModal from '@/components/modals/LoginSuccessModal';
import { useRouter } from 'next/navigation';

export default function Otp() {
  const inputsRef = useRef([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const router = useRouter();

  const handleBack = () => {
		router.back();
	};

  const handleKeyUp = (e, index) => {
    const key = e.keyCode || e.which;
    
    if (key === 8 || key === 37) {
      if (index > 0) {
        inputsRef.current[index - 1].focus();
      }
    } else if (
      (key >= 48 && key <= 57) ||  
      (key >= 65 && key <= 90) ||  
      (key >= 96 && key <= 105) || 
      key === 39                    
    ) {
      if (index < inputsRef.current.length - 1) {
        inputsRef.current[index + 1].focus();
      } else {
        console.log('Submit form');
      }
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    if (value.length > 1) {
      e.target.value = value.slice(0, 1);
    }
  };

  return (
    <>
      <section className="auth signin-email enter-otp">
        <div className="page-title">
          <button type="button" onClick={handleBack} className="back-btn back-page-btn d-flex align-items-center justify-content-center rounded-full">
            <Image src={arrow} alt="Icon"/>
          </button>
        </div>
    
        <div className="heading">
          <h2>Enter OTP</h2>
          <p>We have just sent you 4 digit code via your email <span>example@mail.com</span></p>
        </div>
    
        <div className="auth-form">
          <div className="digit-group">
            {Array(4).fill('').map((_, i) => (
              <input
                key={i}
                type="text"
                maxLength="1"
                ref={el => inputsRef.current[i] = el}
                onKeyUp={(e) => handleKeyUp(e, i)}
                onChange={(e) => handleChange(e, i)}
                data-next={i < 5 ? i + 1 : null}
                data-previous={i > 0 ? i - 1 : null}
              />
            ))}
          </div>
          <button type="button" className="btn-primary" onClick={handleShow}>Continue</button>
          <h6>Didn’t receive code? <button type="button">Resend Code</button></h6>
        </div>
      </section>

      {/* login success modal start */}
      <LoginSuccessModal handleClose={handleClose} show={show}/>
      {/* login success modal end */}
    </>
  )
}
