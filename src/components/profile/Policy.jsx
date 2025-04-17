"use client"

import { policy_data } from '@/public/data/profile-data'

export default function Policy() {
  return (
    <section className="terms-policies px-24">
      {
        policy_data.map(({id, title, policies}) => (
          <div className="mb-16" key={id}>
            <h3 className="mb-8">{title}</h3>
            {
              policies.map((item, i) => (
                <p key={i}>{item}</p>
              ))
            }
          </div>
        ))
      }
    </section>
  )
}
