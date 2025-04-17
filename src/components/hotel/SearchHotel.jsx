"use client"

import Image from 'next/image'
import calenderIcon from '@/public/assets/svg/calendar.svg'
import DateModal from "@/components/modals/DateModal";
import { useState } from 'react';

export default function SearchHotel() {
  const [startDate, setStartDate] = useState(new Date());
  const [checkInShow, setCheckInShow] = useState(false);
  const [checkOutShow, setCheckOutShow] = useState(false);
  const [checkIn, setCheckIn] = useState("Date");
  const [checkOut, setCheckOut] = useState("Date");

  const handleCheckInClose = () => setCheckInShow(false);
  const handleCheckInShow = () => setCheckInShow(true);
  const handleCheckOutClose = () => setCheckOutShow(false);
  const handleCheckOutShow = () => setCheckOutShow(true);

  const handleCheckInDateSelected = (date) => {
    setStartDate(date)
    setCheckIn(date)
  }
  const handleCheckOutDateSelected = (date) => {
    setStartDate(date)
    setCheckOut(date)
  } 

  return (
    <>
      <section className="search pt-12">
        {/* title */}
        <div className="title d-flex align-items-center justify-content-between">
          <h4 className="shrink-0">Stay time</h4>
        </div>

        <form action="#">
          <div className="grid">

            {/* Check in */}
            <div>
              <p className="pb-8">Check in</p>
              <label htmlFor="hcindate" className="w-100 d-flex align-items-center gap-8 radius-24">
                <input type="text" id="hcindate" placeholder="Date" className="input-field"/>
                <span className="icon shrink-0" onClick={handleCheckInShow}>
                  <Image src={calenderIcon} alt="calendar"/>
                </span>
              </label>
            </div>

            {/* Check Out */}
            <div>
              <p className="pb-8">Check Out</p>
              <label htmlFor="hcoutdate" className="w-100 d-flex align-items-center gap-8 radius-24">
                <input type="text" id="hcoutdate" placeholder="Date" className="input-field"/>
                <span className="icon shrink-0" onClick={handleCheckOutShow}>
                  <Image src={calenderIcon} alt="calendar"/>
                </span>
              </label>
            </div>
          </div>
        </form>
      </section>

      {/* check in modal start */}
      <DateModal show={checkInShow} handleClose={handleCheckInClose} startDate={startDate} handleDateSelected={handleCheckInDateSelected}/>
      {/* check in modal end */}

      {/* check out modal start */}
      <DateModal show={checkOutShow} handleClose={handleCheckOutClose} startDate={startDate} handleDateSelected={handleCheckOutDateSelected}/>
      {/* check out modal end */}
    </>
  )
}
