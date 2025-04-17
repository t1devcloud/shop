import Image from 'next/image'
import { chat_data } from '@/public/data/chat-data'

export default function ChatInbox() {
  return (
    <section className="inbox px-24">
      <ul>
        {
          chat_data.map(({id, picture, text, time, owner}) => (
            <li key={id} className={`${owner === 'sender' ? 'left' : 'right flex-row-reverse'} d-flex gap-12`}>
              <div className="avatar position-relative">
                <Image src={picture} alt="Avatar" className="w-100 img-fluid h-100 object-fit-cover rounded-full"/>
                <span className="active-dot rounded-full d-inline-block"></span>
              </div>

              <div className="text">
                <p className="msg">{text}</p>
                <p className="time pt-04">{time}</p>
              </div>
            </li>
          ))
        }
      </ul>
    </section>
  )
}
