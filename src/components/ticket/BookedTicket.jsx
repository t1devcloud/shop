"use client"

import { useState } from 'react'
import { ticket_data } from '@/public/data/ticket-data'
import TicketCard from '@/components/shared/TicketCard'

export default function BookedTicket() {
  const bookedItem = ticket_data.filter(item => {
    return item.status.toLowerCase() === 'booked'
  })

  const [activeTab, setActiveTab] = useState('booked')
  const [activeItems, setActiveItems] = useState(bookedItem);

  const filterTab = (activeStatus) => {
    setActiveTab(activeStatus)
    const activedata = ticket_data.filter(item => {
      return item.status.toLowerCase() === activeStatus.toLowerCase();
    })
    setActiveItems(activedata);
  }
  
  return (
    <section className="ticket-tab">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <button className={`nav-link ${activeTab === 'booked' ? 'active' : ''}`} onClick={() => filterTab('booked')}>Booked</button>
        </li>
        <li className="nav-item">
          <button className={`nav-link ${activeTab === 'finished' ? 'active' : ''}`} onClick={() => filterTab('finished')}>History</button>
        </li>
      </ul>

      <div className="tab-content" id="myTabContent">
        <div className="tab-pane fade show active">
          {
            activeItems.map((item) => <TicketCard key={item.id} data={item}/>)
          }
        </div>
      </div>
    </section>
  )
}
