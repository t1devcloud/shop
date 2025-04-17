import React from 'react'

export default function ProfileCard() {
  return (
    <>
      <section className="add-card p-24 pt-0">
        <form action="#">
          <div className="mb-24">
            <label>Card Number</label>
            <input type="text" placeholder="Enter Card Number" className="input-field"/>
          </div>
          <div className="mb-24">
            <label>Card Holder Name</label>
            <input type="text" placeholder="Enter Holder Name" className="input-field"/>
          </div>
          <div className="grid">
            <div>
              <label>Expired</label>
              <input type="text" placeholder="MM/YY" className="input-field"/>
            </div>
            <div>
              <label>CVC Code</label>
              <input type="text" placeholder="CVC" className="input-field"/>
            </div>
          </div>
        </form>
      </section>

      {/* add-card-btn start */}
      <div className="add-card-btn px-24 pt-24 pb-36 bottom-btn">
        <button type="button" className="btn-primary" disabled>Add Card</button>
      </div>
      {/* add-card-btn end */}
    </>
  )
}
