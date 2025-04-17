"use client"

import Image from 'next/image'
import Link from 'next/link'
import starIcon from '@/public/assets/svg/star-yellow.svg'
import map from '@/public/assets/svg/map-black.svg'

export default function GuideCard({data}) {
  const {name, picture, address, price, day, star} = data || {};

  return (
    <Link href="/profile/guide-profile" className="d-flex gap-16 item w-fit shrink-0">
      <div className="image position-relative shrink-0">
        <Image src={picture} alt="guide" className="guide-img object-fit-cover img-fluid radius-12"/>
        <div className="rating d-flex align-items-center gap-04 w-fit">
          <Image src={starIcon} alt="Star"/>
          <span className="d-inline-block">{star.toFixed(1)}</span>
        </div>
      </div>

      <div className="content">
        <h4>{name}</h4>
        <h5>${price} ({day} Day)</h5>
        <p className="d-flex align-items-center gap-8 location">
          <Image src={map} alt="icon"/>
          {address} 
        </p>
      </div>
    </Link>
  )
}
