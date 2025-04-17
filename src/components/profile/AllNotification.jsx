import Image from 'next/image'
import { all_notification_data } from '@/public/data/profile-data'

export default function AllNotification() {
  
  return (
    <section className="notification">
      {
        all_notification_data.map(({id, title, items}) => (
          <div key={id}>
            <h3 className="mb-32 text-capitalize">{title}</h3>
            <ul>
              {
                items.map(({id, picture, text, time}) => (
                  <li key={id} className="d-flex gap-12">
                    <div className="image d-flex align-items-center justify-content-center rounded-full overflow-hidden shrink-0">
                      <Image src={picture} alt="picture" className="img-fluid h-100 w-100 object-fit-cover"/>
                    </div>
                    <div>
                      <p className="pb-8" dangerouslySetInnerHTML={{__html: text}}></p>
                      <small className="d-block">{time}</small>
                    </div>
                  </li>
                ))
              }
            </ul>
          </div>
        ))
      }
    </section>
  )
}
