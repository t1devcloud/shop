"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import { place_data } from "@/public/data/place-data";
import PlaceCard from "@/components/shared/PlaceCard";
import { Pagination } from "swiper/modules";

export default function Visited() {
  return (
    <section className="visited py-12">
      {/* title */}
      <div className="title d-flex align-items-center justify-content-between">
        <h2 className="shrink-0">Frequently visited</h2>
        <div className="custom-pagination visited-pagination"></div>
      </div>

      <Swiper
        loop={true}
        slidesPerView={2}
        spaceBetween={16}
        pagination={{
          el: ".visited-pagination",
          clickable: true,
        }}
        modules={[Pagination]}
        className="swiper visited-swiper"
      >
        {
          place_data.slice(0,4).map((item) => (
            <SwiperSlide key={item.id} className="swiper-slide">
              <PlaceCard data={item}/>
            </SwiperSlide>
          ))         
        }
      </Swiper>
    </section>
  )
}
