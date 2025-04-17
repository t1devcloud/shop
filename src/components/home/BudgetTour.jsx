"use client"

import { tour_data } from '@/public/data/guide-data'
import TourCard from '@/components/shared/TourCard'
import Link from 'next/link'

export default function BudgetTour() {
  return (
    <section className="budget pt-12">
      {/* title */}
      <div className="title d-flex align-items-center justify-content-between">
        <h2 className="shrink-0">On Budget Tour</h2>
        <Link href="/hotels" className="shrink-0 d-inline-block">See All</Link>
      </div>

      <ul>
        {
          tour_data.slice(0,2).map((item) => (
            <li key={item.id}>
              <TourCard data={item}/>
            </li>
          ))
        }
      </ul>
    </section>
  )
}
