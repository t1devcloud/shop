"use client"

import Facilities from '@/components/hotel/Facilities';
import HotelBanner from '@/components/hotel/HotelBanner';
import HotelDescription from '@/components/hotel/HotelDescription';
import HotelInfo from '@/components/hotel/HotelInfo';
import Location from '@/components/shared/Location';
import Reviews from '@/components/shared/Reviews';
import { tour_data } from '@/public/data/guide-data';
import Link from 'next/link';
import { useEffect, useState } from 'react'

export default function HotelDetails({params}) {
  const { hotelId } = params;
  const [singleHotelFound, setSingleHotelFound] = useState(null);
  
  useEffect(() => {
    const parsedHotelId = parseInt(hotelId);
    const foundHotel = tour_data?.find((item) => item.id === parsedHotelId);
    setSingleHotelFound(foundHotel);
  }, [hotelId]);

  return (
    <main className="details hotel-details">
      <HotelBanner/>
      <section className="details-body">
        {singleHotelFound ? (
          <HotelInfo singleHotelFound={singleHotelFound} />
        ) : (
          <p>Loading...</p>
        )}
        <Facilities/>
        <HotelDescription/>
        <Reviews/>
        <Location/>
      </section>

      <section className="details-footer d-flex align-items-center justify-content-between gap-8 w-100">
        {singleHotelFound ? (
          <p>${singleHotelFound?.price - (singleHotelFound?.price * (singleHotelFound?.discountPercent / 100))} <span>${singleHotelFound?.price}</span></p>
          ) : (
          <p>Loading...</p>
        )}
        <Link href="/book-hotel">Book Now</Link>
      </section>
    </main>
  )
}
