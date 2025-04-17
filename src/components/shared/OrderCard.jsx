import Image from 'next/image'
import loc from '@/public/assets/images/booking/loc-2.png'
import map from '@/public/assets/svg/map-marker.svg'
import star from '@/public/assets/svg/star-yellow.svg'

export default function OrderCard({classes}) {
  return (
    <section className={`order-info pb-12 ${classes}`}>
      {/* item */}
      <div className="item d-flex align-items-center gap-16 w-100">
        <div className="image shrink-0 overflow-hidden radius-8">
          <Image src={loc} alt="Place" className="img-fluid w-100 h-100 object-fit-cover"/>
        </div>
  
        <div className="content flex-grow">
          <h4>The Lalit New Delhi</h4>
          <p className="d-flex align-items-center gap-04 location mt-04">
            <Image src={map} alt="icon"/>
            Uttar Pradesh, India 
          </p>
          <p className="rating d-flex align-items-center gap-04 mt-16">
            <Image src={star} alt="icon"/>
            4.4 <span>(41)</span>
          </p>
        </div>
      </div>
    </section>
  )
}
