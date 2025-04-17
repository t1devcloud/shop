import Image from 'next/image'
import star from '@/public/assets/svg/star-yellow.svg'

export default function ReviewCard({data}) {
  const {name, picture, date, reviewMsg, rating, reviewImages} = data;

  return (
    <div className="review-card d-flex gap-16">
      <div className="shrink-0 image overflow-hidden rounded-full">
        <Image src={picture} alt="Avatar" className="img-fluid w-100"/>
      </div>

      <div className="flex-grow">
        <div className="d-flex align-items-center justify-content-between">
          <h4>{name}</h4>
          <span className="d-inline-block">{date}</span>
        </div>
        <ul className="d-flex align-items-center gap-8">
          {
            [...Array(rating)].map((item, i) => (
              <li key={i}>
                <Image src={star} alt="icon"/>
              </li>
            ))
          }
        </ul>
        <p>{reviewMsg}</p>
        {
          reviewImages && 
          <ul className="d-flex flex-wrap gap-8 mt-16">
            {
              reviewImages.map(({id, image}) => (
                <li key={id}>
                  <div className="review-image overflow-hidden radius-8">
                    <Image src={image} alt="Review"/>
                  </div>
                </li>
              ))
            }
          </ul>
        }
      </div>
    </div>
  )
}
