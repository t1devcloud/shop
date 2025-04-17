"use client"

import Image from 'next/image'
import calendar from '@/public/assets/svg/calendar.svg'
import DateModal from '../modals/DateModal'
import { useState } from 'react';

export default function HotelVisitDate({classes}) {
  const [startDate, setStartDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const handleDateSelected = (date) => {
    setStartDate(date)
  }

  const handleClose = () => {
    setShow(false)
  }

  return (
    <>
      <div className={`search mt-16 ${classes}`}>
        <h6 className="mb-8">Date Visit</h6>
        <label htmlFor="vdate" className="w-100 d-flex align-items-center gap-8 radius-24" onClick={() => setShow(true)}>
          <input type="text" id="vdate" placeholder="Date" className="input-field"/>
          <span className="icon shrink-0">
            <Image src={calendar} alt="calendar"/>
          </span>
        </label>
      </div>

      {/* date modal start */}
      <DateModal show={show} handleClose={handleClose} startDate={startDate} handleDateSelected={handleDateSelected}/>
      {/* date modal end */}
    </>
  )
}
