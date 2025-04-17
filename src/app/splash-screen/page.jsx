"use client"

import Splash from '@/components/shared/Splash'
import Image from 'next/image';
import back from '@/public/assets/svg/menu/back-white.svg';
import { useRouter } from 'next/navigation';

export default function SplashScreen() {
  const router = useRouter();
    
  const handleBack = () => {
    router.back();
  };

  return (
    <>
      <Splash/>

      {/* header */}
      <div className="appbar">
        <button onClick={handleBack} type="button" className="back-page-btn">
          <Image src={back} alt="icon"/>
        </button>
        <h1>Splash screen</h1>
      </div>
    </>
  )
}
