"use client"
import Image from 'next/image'
import arrow from '@/public/assets/svg/arrow-left-black.svg'
import more from '@/public/assets/svg/more.svg'
import voice from '@/public/assets/svg/voice-call.svg'
import video from '@/public/assets/svg/video-call.svg'
import { useRouter } from 'next/navigation'

import Dropdown from 'react-bootstrap/Dropdown';

export default function ChatPageTitle() {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };

  return (
    <div className="page-title">
      <button
        type="button"
        onClick={handleBack}
        className="back-btn back-page-btn d-flex align-items-center justify-content-center rounded-full"
      >
        <Image src={arrow} alt="arrow" />
      </button>
      <h3 className="main-title">Richar Kandowen</h3>
      <div>
        <Dropdown className="dropdown" align='right'>
          <Dropdown.Toggle className='more-btn d-flex align-items-center justify-content-center rounded-full'>
            <Image src={more} alt="arrow" />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item className="dropdown-item" href="/chat/audio-call">
                <Image src={voice} alt="call" />
                Voice Call
            </Dropdown.Item>
            <Dropdown.Item className="dropdown-item" href="/chat/video-call">
                <Image src={video} alt="video" />
                Video Call
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  )
}
