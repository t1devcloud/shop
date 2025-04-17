"use client"

import Image from 'next/image'
import Link from 'next/link'
import heartBlack from '@/public/assets/svg/heart-black.svg'
import heartRed from '@/public/assets/svg/heart-red.svg'
import map from '@/public/assets/svg/map-marker.svg'
import starIcon from '@/public/assets/svg/star-yellow.svg'

export default function PlaceCard({data}) {
  const {id, title, picture, address, price, star, rating, wishlisted} = data || {};

  return (
    <Link href={`/vacation-details/${id}`} className='place-card'>
      <div className="image position-relative">
        <Image src={picture} alt={title} className="img-fluid w-100 overflow-hidden radius-8"/>
        <span className="d-flex align-items-center justify-content-center rounded-full">
          {
            wishlisted === true ? 
            <Image src={heartRed} alt="icon" />
            :
            <Image src={heartBlack} alt="icon" />
          }
        </span>
      </div>
      <div className="content">
        <h4>{title}</h4>
        <p className="d-flex align-items-center gap-04 location">
          <Image src={map} alt="icon" />
          {address}
        </p>
        <div className="price-field d-flex align-items-center justify-content-between">
          <h3>${price}</h3>
          <p className="d-flex align-items-center gap-04">
            <Image src={starIcon} alt="icon" />
            {star} <span>({rating})</span>
          </p>
        </div>
      </div>
    </Link>
  )
}
