import Image from 'next/image'
import voice from '@/public/assets/svg/voice-black.svg'
import volume from '@/public/assets/svg/volume-up-black.svg'
import video from '@/public/assets/svg/video-black.svg'
import call from '@/public/assets/svg/call-white.svg'
import Link from 'next/link'

export default function VideoCallInfoAction() {
  return (
    <section className="action">
      <ul className="d-flex align-items-center justify-content-between">
        <li>
          <button type="button" className="d-flex align-items-center justify-content-center rounded-full">
            <Image src={voice} alt="icon"/>
          </button>
        </li>
        <li>
          <button type="button" className="d-flex align-items-center justify-content-center rounded-full">
            <Image src={volume} alt="icon"/>
          </button>
        </li>
        <li>
          <button type="button" className="d-flex align-items-center justify-content-center rounded-full">
            <Image src={video} alt="icon"/>
          </button>
        </li>
        <li>
          <Link href="/chat/chat" className="call d-flex align-items-center justify-content-center rounded-full">
            <Image src={call} alt="icon"/>
          </Link>
        </li>
      </ul>
    </section>
  )
}
