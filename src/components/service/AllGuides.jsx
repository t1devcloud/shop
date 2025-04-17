import { guide_data } from '@/public/data/guide-data'
import React from 'react'
import GuideCard from '../shared/GuideCard'

export default function AllGuides() {
  return (
    <section className="guide px-24 pb-24">
      <ul>
        {
          guide_data.map((item) => (
            <li key={item.id}>
              <GuideCard data={item}/>
            </li>
        ))}
      </ul>
    </section>
  )
}
