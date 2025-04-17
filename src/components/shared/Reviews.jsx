import { review_data } from '@/public/data/review-data'
import React from 'react'
import ReviewCard from './ReviewCard'
import Link from 'next/link'

export default function Reviews() {
  return (
    <section className="reviews py-16">
      {/* title */}
      <div className="title d-flex align-items-center justify-content-between">
        <h4 className="shrink-0">Reviews</h4>
        <Link href="/review" className="shrink-0 d-inline-block">See All</Link>
      </div>

      {/* review card */}
      {
        review_data.slice(0,2).map((item) => <ReviewCard key={item.id} data={item}/>)
      }
    </section>
  )
}
