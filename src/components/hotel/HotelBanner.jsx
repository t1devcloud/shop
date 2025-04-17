import Image from 'next/image';
import banner from '@/public/assets/images/details/banner-2.png';
import arrow from '@/public/assets/svg/arrow-left-black.svg';
import { useRouter } from 'next/navigation';

export default function HotelBanner() {
  const router = useRouter();
	const handleBack = () => {
		router.back();
	};

  return (
    <section className="banner position-relative">
      <Image src={banner} alt="Banner" className="w-100 img-fluid"/>
      
      {/* title */}
      <div className="page-title">
        <button onClick={handleBack} type="button" className="back-btn back-page-btn d-flex align-items-center justify-content-center rounded-full">
          <Image src={arrow} alt="arrow"/>
        </button>
        <h3 className="main-title">Hotel Details</h3>
      </div>
    </section>
  )
}
