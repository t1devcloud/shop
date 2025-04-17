"use client"

import Image from 'next/image'
import person from '@/public/assets/images/chat/person-3.png'
import arrow from '@/public/assets/svg/arrow-left-black.svg'
import call from '@/public/assets/svg/call-white-big.svg'
import voice from '@/public/assets/svg/voice-black-big.svg'
import video from '@/public/assets/svg/video-black-big.svg'
import pic from '@/public/assets/images/chat/img-1.png'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function ChatAudioCall() {
  const router = useRouter();
    
  const handleBack = () => {
    router.back();
  };

  return (
    <section className="audio-call position-relative">
      <Image src={person} alt="person" className="h-100 w-100 object-fit-cover img-fluid"/>

      {/* page-title */}
      <div className="page-title">
        <button onClick={handleBack} type="button" className="back-btn back-page-btn d-flex align-items-center justify-content-center rounded-full">
          <Image src={arrow} alt="arrow"/>
        </button>
      </div>

      {/* call-info */}
      <div className="call-info">
        <div className="text-center">
          <Link href="/chat/chat" className="call d-flex align-items-center justify-content-center rounded-full">
            <Image src={call} alt="icon"/>
          </Link>
        </div>

        <div className="d-flex align-items-center justify-content-between btns">
          <button type="button" className="d-flex align-items-center justify-content-center rounded-full">
            <Image src={voice} alt="icon"/>
          </button>
          <button type="button" className="d-flex align-items-center justify-content-center rounded-full">
            <Image src={video} alt="icon"/>
          </button>
        </div>

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
