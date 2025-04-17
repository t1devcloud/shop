"use client";

import { useState, useEffect } from "react";
import VacationBanner from "@/components/service/VacationBanner";
import VacationInfo from "@/components/service/VacationInfo";
import { place_data } from "@/public/data/place-data";
import VacationGuide from "@/components/service/VacationGuide";
import Reviews from "@/components/shared/Reviews";
import Location from "@/components/shared/Location";
import Link from "next/link";

export default function VacationDetails({ params }) {
  const { placeId } = params;
  const [singlePlaceFound, setSinglePlaceFound] = useState(null);

  useEffect(() => {
    const parsedPlaceId = parseInt(placeId);
    const foundPlace = place_data?.find((item) => item.id === parsedPlaceId);
    setSinglePlaceFound(foundPlace);
  }, [placeId]);
  
  return (
    <main className="details vacation-details">
      <VacationBanner />
      <section className="details-body">
        {singlePlaceFound ? (
          <VacationInfo singlePlace={singlePlaceFound} />
        ) : (
          <p>Loading...</p>
        )}
        <VacationGuide/>
        <Reviews/>
        <Location/>
      </section>
      <section className="details-footer d-flex align-items-center justify-content-between gap-8 w-100">
      {singlePlaceFound ? (
          <p>${singlePlaceFound?.price} <span>/Person</span></p>
        ) : (
          <p>Loading...</p>
        )}
        <Link href="/checkout-vacation">Book Now</Link>
      </section>
    </main>
  );
}
