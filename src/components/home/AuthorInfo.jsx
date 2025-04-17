import Image from 'next/image'
import avatar from '@/public/assets/images/home/avatar.png'
import map from '@/public/assets/svg/map-marker.svg'
import bell from '@/public/assets/svg/bell-black.svg'
import envelope from '@/public/assets/svg/message-square-dots.svg'
import Link from 'next/link'

export default function AuthorInfo() {
  return (
    <section className="info d-flex align-items-start justify-content-between pb-12">
      <div className="d-flex align-items-center justify-content-between gap-14">
        <div className="image shrink-0 rounded-full overflow-hidden">
          <Image src={avatar} alt="avatar" className="w-100 h-100 object-fit-cover"/>
        </div>
        <div>
          <h3>Hi, Andy</h3>
          <p className="d-flex align-items-center gap-04">
            <Image src={map} alt="icon"/>
            Netherlands
          </p>
        </div>
      </div>

      <ul className="d-flex align-items-center gap-16">
        <li>
          <Link href="/notification" className="d-flex align-items-center justify-content-center rounded-full position-relative">
            <Image src={bell} alt="icon"/>
            <span className="dot"></span>
          </Link>
        </li>
        <li>
          <Link href="/chat/message" className="d-flex align-items-center justify-content-center rounded-full position-relative">
            <Image src={envelope} alt="icon"/>
            <span className="dot"></span>
          </Link>
        </li>
      </ul>
    </section>
  )
}
