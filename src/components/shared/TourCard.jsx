"use client"

import Image from 'next/image'
import Link from 'next/link'
import map from '@/public/assets/svg/map-marker.svg'

export default function TourCard({data}) {
  const {id, name, picture, time, address, price} = data || {};

  return (
    <Link href={`/hotel-details/${id}`} className="d-flex align-items-center gap-12">
      <div className="image shrink-0 overflow-hidden radius-8">
        <Image src={picture} alt="Place" className="img-fluid w-100 h-100 object-fit-cover"/>
      </div>

      <div className="content shrink-0 d-flex align-items-center gap-12 justify-content-between flex-grow">
        <div>
          <h4>{name}</h4>
          <h5>{time}</h5>
          <p className="d-flex align-items-center gap-8 location">
            <Image src={map} alt="icon"/>
            {address}
          </p>
        </div>
        <p className="price"><span>${price}</span>/Person</p>
      </div>
    </Link>
  )
}
