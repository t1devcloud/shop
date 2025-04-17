import { review_data } from '@/public/data/review-data'
import ReviewCard from '../shared/ReviewCard'

export default function AllReviews() {
  return (
    <section className="reviews px-24 pb-24">
      {
        review_data.map((item) => <ReviewCard key={item.id} data={item}/>)
      }
    </section>
  )
}

