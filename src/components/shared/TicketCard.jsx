"use client"

import Image from "next/image";
import map from "@/public/assets/svg/map-marker.svg";
import star from "@/public/assets/svg/star-yellow.svg";
import Link from "next/link";

export default function TicketCard({data}) {
  const {title, address, rating, reviewCount, date, status, price, picture} = data || {};

  return (
    <div className="ticket-card radius-8">
      {/* card-title */}
      <div className="card-title d-flex align-items-center justify-content-between">
        <p>{date}</p>
        <span className={status === 'finished' ? 'finished' : ''}>{status.toLowerCase() === 'booked' ? 'Will Come' : 'Finished'}</span>
      </div>

      {/* card-item */}
      <div className="card-item d-flex align-items-center gap-16 w-100">
        <div className="image shrink-0 overflow-hidden radius-8">
          <Image src={picture} alt="Place" className="img-fluid w-100 h-100 object-fit-cover"/>
        </div>

        <div className="content flex-grow">
          <h4>{title}</h4>
          <p className="d-flex align-items-center gap-04 location mt-04">
            <Image src={map} alt="icon"/>
            {address}
          </p>
          <p className="rating d-flex align-items-center gap-04 mt-16">
            <Image src={star} alt="icon"/>
            {rating} <span>({reviewCount} Reviews)</span>
          </p>
        </div>
      </div>

      {/* card-footer */}
      <div className="card-footer d-flex align-items-center justify-content-between">
        <div>
          <p>Total Price</p>
          <h3>${price}</h3>
        </div>

        <Link href="/ticket-detail">Detail</Link>
      </div>

    </div>
  )
}
