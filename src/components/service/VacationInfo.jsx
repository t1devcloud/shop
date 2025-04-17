import Image from 'next/image'
import map from '@/public/assets/svg/map-marker.svg'
import starIcon from '@/public/assets/svg/star-yellow.svg'
import heartRed from '@/public/assets/svg/heart-red-light.svg'
import heartBlack from '@/public/assets/svg/heart-black.svg'

export default function VacationInfo({singlePlace}) {
const { title, address, rating, star, wishlisted, description } = singlePlace;

  return (
    <>
      <section className="d-flex align-items-center gap-8 details-title">
        <div className="flex-grow">
          <h3>{title}</h3>
          <ul className="d-flex align-items-center gap-8">
            <li className="d-flex align-items-center gap-04">
              <Image src={map} alt="icon"/>
              <p>{address}</p>
            </li>
            <li className="d-flex align-items-center gap-04">
              <Image src={starIcon} alt="icon"/>
              <p><span>{star}</span> ({rating} Reviews)</p>
            </li>
          </ul>
        </div>
        <span className="d-flex align-items-center justify-content-center rounded-full shrink-0">
          {
            wishlisted ? 
            <Image src={heartRed} alt="heart"/>
            :
            <Image src={heartBlack} alt="heart"/>
          }
        </span>
      </section>

      <section className="details-info pt-32 pb-16">
        <div className="title">
          <h4>Details</h4>
        </div>
        <p>{description}</p>
      </section>
    </>
  )
}
