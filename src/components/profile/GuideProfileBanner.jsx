import Image from 'next/image'
import banner from '@/public/assets/images/profile/guide-profile-banner.png'
import PageTitle from '@/components/shared/PageTitle'

export default function GuideProfileBanner() {
  return (
    <section className="banner position-relative">
      <Image src={banner} alt="Banner" className="w-100 img-fluid"/>
      
      {/* title */}
      <PageTitle title="Profile"/>
    </section>
  )
}
