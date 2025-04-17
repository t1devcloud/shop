import { place_data } from '@/public/data/place-data'
import PlaceCard from '../shared/PlaceCard'
import Link from 'next/link'

export default function SearchRecommendation() {
  return (
    <section className="recommended py-12">
      {/* title */}
      <div className="title d-flex align-items-center justify-content-between">
        <h2 className="shrink-0">Recommendation</h2>
        <Link href="/explore" className="shrink-0 d-inline-block">See All</Link>
      </div>

      {/* places */}
      <div className="grid">
        {
          place_data.map((item) => <PlaceCard key={item.id} data={item}/>)
        }
      </div>
    </section>
  )
}
