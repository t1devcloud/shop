import { place_data } from '@/public/data/place-data'
import PlaceCard from '@/components/shared/PlaceCard'

export default function Placecs() {
  const wishlistedData = place_data.filter(item => {
    return item.wishlisted = true;
  })
  return (
    <section className="all-place">
      <div className="grid">
        {
          wishlistedData.map((item) => <PlaceCard key={item.id} data={item}/>)
        }
      </div>
    </section>
  )
}
