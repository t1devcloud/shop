import Image from 'next/image'
import banner from '@/public/assets/images/home/home-banner.png'

const HomeBanner = () => {
  return (
    <div className='home-banner my-12'>
      <Image src={banner} alt="Banner" className='w-100'/>
    </div>
  )
}

export default HomeBanner
