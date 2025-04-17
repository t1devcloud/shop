import Image from 'next/image'
import person1 from '@/public/assets/images/chat/person-1.png'
import person2 from '@/public/assets/images/chat/person-2.png'
import pic from '@/public/assets/images/chat/img-1.png'

export default function ChatVideoCall() {
  return (
    <section className="video-call d-flex flex-column justify-content-between">
      <div className="img-main">
        <Image src={person1} alt="person" className="h-100 w-100 object-fit-cover"/>
      </div>
      <div className="img-main">
        <Image src={person2} alt="person" className="h-100 w-100 object-fit-cover"/>
      </div>

      {/* call-info */}
      <div className="call-info">
        <div className="call-info-main d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-8">
            <div className="rounded-full overflow-hidden image shrink-0">
              <Image src={pic} alt="person" className="img-fluid w-100 h-100 object-fit-cover"/>
            </div>
            <div>
              <h5>Richar Kandowen</h5>
              <p>Richar Kandowen</p>
            </div>
          </div>

          <div className="d-flex align-items-center gap-8">
            <span className="dot d-inline-block rounded-full"></span>
            <p className="time">07.23</p>
          </div>
        </div>
      </div>
    </section>
  )
}
