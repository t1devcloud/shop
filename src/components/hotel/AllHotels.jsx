import { tour_data } from '@/public/data/guide-data'
import TourCard from '../shared/TourCard'

export default function AllHotels() {
  return (
    <section className="budget px-24 pb-24">
      <ul>
        {
          tour_data.map((item) => (
            <li key={item.id}>
              <TourCard data={item}/>
            </li>
          ))
        }
      </ul>
    </section>
  )
}
