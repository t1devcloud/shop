"use client"

import { useState } from 'react';
import { payment_data } from '@/public/data/profile-data'
import Image from 'next/image'

export default function PaymentMethods() {
  const [checked, setChecked] = useState(1);

  const handleChange = (id) => {
    setChecked(id);
  }

  return (
    <>
      <section className="payment-method px-24">
        {
          payment_data.map(({id, name, cardNo, author, picture}) => (
            <label key={id} className="custom-check-container payment-container pt-16">
              <input type="radio" name="payment" checked={checked === id} onChange={() => handleChange(id)} />
              <span className="checkmark"></span>
              <span className="d-flex gap-12">
                <span className="icon shrink-0 rounded-full d-flex align-items-center justify-content-center">
                  <Image src={picture} alt="card" className="img-fluid"/>
                </span>
                <span className="d-block text flex-grow pb-16">
                  <small className="d-block payment-method-card-title">{name}</small>
                  <small className="d-block pt-04 pb-8 payment-method-card-num">{cardNo}</small>
                  <small className="d-block payment-method-card-num">{author}</small>
                </span>
              </span>
            </label>
          ))
        }
      </section>

      {/* select-btn start */}
      <div className="select-btn bottom-btn px-24 pt-24 pb-36">
        <button type="button" className="btn-primary">Select Payment</button>
      </div>
      {/* select-btn end */}
    </>
  )
}
