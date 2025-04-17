"use client"

import { message_data } from '@/public/data/chat-data'
import Image from 'next/image'
import Link from 'next/link'
import trash from '@/public/assets/svg/trash-red.svg'

export default function ChatMessage() {
  return (
    <section className="message mt-24">
      {
        message_data.map(({id, picture, author, text, time, msgCount}) => (
          <div key={id} className="single-chat position-relative">
            <Link href="/chat/chat" className="single-main d-flex align-items-center justify-content-between gap-04 radius-12">
              <div className="shrink-0 d-flex align-items-center gap-12">
                <div className="image shrink-0 position-relative">
                  <Image src={picture} alt="Avatar" className="img-fluid w-100 h-100 object-fit-cover rounded-full"/>
                  <small className="active-dot"></small>
                </div>
      
                <div className='author'>
                  <h4>{author}</h4>
                  <p>{text}</p>
                </div>
              </div>
      
              <div className="text-end">
                <h5 className="pb-8">{time}</h5>
                <span className="d-inline-block rounded-full text-center">{msgCount}</span>
              </div>
            </Link>

            {/* trash */}
            <button type="button" className="trash">
              <Image src={trash} alt="trash"/>
            </button>
          </div>
        ))
      }
    </section>
  )
}
