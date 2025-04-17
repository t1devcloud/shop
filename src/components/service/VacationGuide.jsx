import { guide_data } from '@/public/data/guide-data'
import GuideCard from '../shared/GuideCard'

export default function VacationGuide() {
  return (
    <section className="guide py-16">
      {/* title */}
      <div className="title">
        <h4>Tour Guide</h4>
      </div>

      {/* cards */}
      <div className="d-flex gap-24 all-cards scrollbar-hidden">
        {
          guide_data.map((item) => <GuideCard key={item.id} data={item}/>)
        }
      </div>
    </section>
  )
}
