"use client"

import Image from 'next/image'
import calendar from '@/public/assets/svg/calendar.svg'
import map from '@/public/assets/svg/map-marker.svg'
import Search from '../shared/Search'
import DateModal from '../modals/DateModal'
import { useState } from 'react'
import SearchLocationModal from '../modals/SearchLocationModal'

export default function SearchMain() {
  const [startDate, setStartDate] = useState(new Date());
  const [showDate, setShowDate] = useState(false);
  const [showLocation, setShowLocation] = useState(false);

  const handleCloseDate = () => {
    setShowDate(false);
  }

  const handleCloseLocation = () => {
    setShowLocation(false);
  }

  const handleShowDate = () => {
    setShowDate(true);
  }

  const handleShowLocation = () => {
    setShowLocation(true);
  }

  const handleDateSelected = (date) => {
    setStartDate(date)
  }

  return (
    <>
      <section className="search pb-12">
        {/* search start */}
        <Search/>
        {/* search end */}
        <form action="#">

          <div className="grid">
            {/* date */}
            <label htmlFor="sdate" className="w-100 d-flex align-items-center gap-8 radius-24" onClick={handleShowDate}>
              <input type="text" id="sdate" placeholder="Date" className="input-field"/>
              <span className="icon shrink-0">
                <Image src={calendar} alt="calendar"/>
              </span>
            </label>

            {/* location */}
            <label htmlFor="slocation" className="w-100 d-flex align-items-center gap-8 radius-24" onClick={handleShowLocation}>
              <input type="text" id="slocation" placeholder="Location" className="input-field"/>
              <span className="icon shrink-0">
                <Image src={map} alt="calendar"/>
              </span>
            </label>
          </div>
        </form>
      </section>

      {/* date picker modal start */}
      <DateModal show={showDate} handleClose={handleCloseDate} startDate={startDate} handleDateSelected={handleDateSelected}/>
      {/* date picker modal end */}

      {/* search location modal start */}
      <SearchLocationModal show={showLocation} handleClose={handleCloseLocation}/>
      {/* search location modal end */}
    </>
  )
}
