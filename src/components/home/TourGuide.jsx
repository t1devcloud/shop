"use client"

import { guide_data } from '@/public/data/guide-data'
import GuideCard from '@/components/shared/GuideCard'
import Link from 'next/link'

export default function TourGuide() {
  return (
    <section className="guide py-12">
      {/* title */}
      <div className="title d-flex align-items-center justify-content-between">
        <h2 className="shrink-0">Tour Guide</h2>
        <Link href="/tour-guide" className="shrink-0 d-inline-block">See All</Link>
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
