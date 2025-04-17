"use client"

import { useState } from 'react'
import { hotel_facilities } from '@/public/data/hotel-facility'
import FacilityCard from '../shared/FacilityCard'
import FacilityModal from '../modals/FacilityModal'

export default function Facilities() {
  const [show, setShow] = useState(false);

  return (
    <>
      <section className="facilities py-12">
        {/* title */}
        <div className="title d-flex align-items-center justify-content-between">
          <h4 className="shrink-0">Special Amenities</h4>
          <button type="button" onClick={() => setShow(true)} className="shrink-0 d-inline-block">See All</button>
        </div>

        <div className="grid gap-24">
          {
            hotel_facilities.slice(0, 4).map((item) => <FacilityCard key={item.id} data={item}/>)
          }
        </div>
      </section>

      {/* service modal start */}
      <FacilityModal show={show} setShow={setShow} />
      {/* service modal end */}
    </>
  )
}
