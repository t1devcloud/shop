"use client"
import { useState } from 'react'
import { address_data } from '@/public/data/profile-data'

export default function AllAddress() {
  const [checked, setChecked] = useState(1);

  const handleChange = (id) => {
    setChecked(id);
  }    

  return (
    <section className="all-address p-24">
      {
        address_data.map(({id, name, phone, address}) => (
          <div key={id} className={`address-card ${id !== 1 && 'mt-16'}`}>
            <label className="custom-check-container address-container">
              <input type="radio" name="address" checked={checked === id} onChange={() => handleChange(id)}/>
              <span className="checkmark"></span>
              <small className="text d-block">
                <small className="address-card-title d-block">{name}</small>
                <small className="address-card-phn pt-04 pb-8 d-block">{phone}</small>
                <small className="address-card-phn d-block">{address}</small>
              </small>
            </label>
            <button type="button" className="change-add">Change Address</button>
          </div>
        ))
      }
    </section>
  )
}
