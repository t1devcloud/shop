import React from 'react'

export default function TicketDetailInfo() {
  return (
    <div>
      <div className="price border-t d-flex align-items-center justify-content-between pt-24 pb-12">
        <p>Total</p>
        <p><span>$320</span></p>
      </div>

      {/* promo-code */}
      <div className="price d-flex align-items-center justify-content-between py-12">
        <p>Code Promo</p>
        <p><span>HEZORKS</span></p>
      </div>

      {/* promo-price */}
      <div className="price promo-price border-b pb-24 promo-price d-flex align-items-center justify-content-between pt-12 pb-24">
        <p>Promo</p>
        <p><span>-$20</span></p>
      </div>

      {/* total-price */}
      <div className="price d-flex align-items-center justify-content-between pt-24">
        <p>Total Pay</p>
        <p><span>$300</span></p>
      </div>
  
      {/* download-btn start */}
      <div className="download-btn mt-64">
        <button type="button" className="btn-primary">Download PDF</button>
      </div>
    </div>
  )
}
