"use client"

import { useState } from 'react'
import PaymentSuccessModal from '../modals/PaymentSuccessModal'

export default function HotelPayButton() {
  const [show, setShow] = useState(false)
  return (
    <>
      <div className="pay-btn mt-64">
        <button type="button" className="btn-primary" onClick={() => setShow(true)}>Pay Now</button>
      </div>

      {/* payment success modal start */}
      <PaymentSuccessModal show={show} setShow={setShow} />
      {/* payment success modal end */}
    </>
  )
}
