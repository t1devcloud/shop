"use client"

import Link from 'next/link'
import { service_data } from '@/public/data/service-data'
import Image from 'next/image'
import category from "@/public/assets/images/home/category.png"
import { useState } from 'react';
import ServiceModal from '@/components/modals/ServiceModal';

export default function Service() {
  const [show, setShow] = useState(false);
 
  return (
    <>
      <section className="service py-12">
        {
          service_data.slice(0,3).map(({id, title, picture}) => (
            <Link key={id} href="/service-location">
              <figure className="item text-center">
                <div className="image rounded-full d-flex align-items-center justify-content-center m-auto">
                  <Image src={picture} alt={title} className="img-fluid backface-hidden"/>
                </div>
                <figcaption>{title}</figcaption>
              </figure>
            </Link>
          ))
        }

        
        <figure className="item text-center" onClick={() => setShow(true)}>
          <div className="image rounded-full d-flex align-items-center justify-content-center m-auto">
            <Image src={category} alt="category" className="img-fluid backface-hidden"/>
          </div>
          <figcaption>More</figcaption>
        </figure>
      </section>

      {/* service modal start */}
      <ServiceModal show={show} setShow={setShow}/>
      {/* service modal end */}
    </>
  )
}
