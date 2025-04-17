"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { onboarding_data } from '@/public/data/onboarding-data'
import arrow_circle from "@/public/assets/svg/arrow-circle.svg";

export default function Onboarding() {
	const swiperRef = useRef(null);
	const [showFooter, setShowFooter] = useState(true);

	const handleSlideChange = () => {
		const swiperInstance = swiperRef.current.swiper;
		if (swiperInstance.activeIndex === swiperInstance.slides.length - 1) {
			setShowFooter(false);
		} else {
			setShowFooter(true);
		}
	};

  useEffect(() => {
		const swiperInstance = swiperRef.current.swiper;
    swiperInstance.on('slideChange', handleSlideChange);
    return () => {
      swiperInstance.off('slideChange', handleSlideChange);
    };
  }, []);

  const handleSkip = () => {
    const swiperInstance = swiperRef.current.swiper;
    const lastIndex = swiperInstance.slides.length - 1;
    swiperInstance.slideTo(lastIndex);
  };

  return (
    <section className="onboarding">
      <Swiper 
				ref={swiperRef} 
				loop={false}
				slidesPerView={1}
				pagination={{ clickable: true }}
				on={{
					slideChange: handleSlideChange,
				}}
				modules={[Pagination]}
				className={`swiper onboarding-swiper ${showFooter ? '' : 'd-none-pagination'}`}
			>
					{
						onboarding_data.map((item, i) => (
							<SwiperSlide 
								key={i}
								className="swiper-slide"
							>
								<div className="image position-relative">
									<Image
										src={item.image}
										alt="Slide"
										className="w-100 h-100 object-fit-cover"
									/>
								</div>
								<div className="content text-center">
									<h2>{item.title}</h2>
									<p>{item.description}</p>
								</div>
							</SwiperSlide>
						))
					}
				<div className={`get-start text-center ${showFooter ? 'd-none' : ''}`}>
					<Link
						href="/auth/signin"
						className="btn-primary btn-get-started"
					>
						Get Started
					</Link>
					<h6>
						Do not have an account?
						<Link href="/auth/signup">Register</Link>
					</h6>
				</div>

				<div className={`slider-footer ${showFooter ? '' : 'd-none'}`}>
					<div className="row align-items-center">
						<div className="col-6">
							<button type="button" className="skip-btn" onClick={handleSkip}>
								<Image src={arrow_circle} alt="Arrow"/>
								Skip
							</button>
						</div>
					</div>
				</div>
			</Swiper>

    </section>
  )
}
