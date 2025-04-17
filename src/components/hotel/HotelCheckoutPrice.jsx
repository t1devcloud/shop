import React from 'react'

export default function HotelCheckoutPrice() {
  return (
    <section>
      {/* number of people */}
      <div className="mt-16">
        <h6 className="mb-8">Number of people</h6>
        <input type="text" placeholder="Number of people" className="input-field"/>
      </div>

      {/* price */}
      <div className="price border-b d-flex align-items-center justify-content-between pt-16 pb-24">
        <p>Price</p>
        <p><span>$32</span> / Person</p>
      </div>

      {/* total-price */}
      <div className="price d-flex align-items-center justify-content-between pt-24">
        <p>Total</p>
        <p><span>$160</span></p>
      </div>

      {/* promo-code */}
      <div className="promo-code py-24">
        <div className="sub-title mb-16">
          <h4>Promo Code</h4>
        </div>

        <div className="d-flex align-items-center gap-8 input-area">
          <input type="text" placeholder="Input code" className="flex-grow"/>
          <button type="button" className="shrink-0">Apply</button>
        </div>
      </div>

      {/* promo-price */}
      <div className="price border-b pb-24 promo-price d-flex align-items-center justify-content-between">
        <p>Promo</p>
        <p><span>-$10</span></p>
      </div>

      {/* total-price */}
      <div className="price d-flex align-items-center justify-content-between pt-24">
        <p>Total Pay</p>
        <p><span>$150</span></p>
      </div>
    </section>
  )
}
