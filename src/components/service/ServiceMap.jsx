"use client"

import { useEffect, useState } from "react"
import LocationModal from "@/components/modals/LocationModal";
import map from "@/public/assets/images/service-loc/map-marker.png"
import Image from "next/image";
import LocationDetailModal from "@/components/modals/LocationDetailModal";

export default function ServiceMap() {
  const [show, setShow] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const [detailData, setDetailData] = useState({});

  const handleDetail = ({title, rating, review, address, picture}) => {
    setDetailData({title, rating, review, address, picture})
    setShow(false);
  }

  useEffect(() => {
    if (Object.keys(detailData).length > 0) {
      setShowDetail(true);
    }
  }, [detailData]);

  return (
    <>
      <div id="map" className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d846588.5514550178!2d-118.35899906676545!3d34.01855672774309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1701149305360!5m2!1sen!2sbd"
          style={{ border: 0, width: "100%", height: "100%", zIndex: -1 }}
          allowFullScreen={true}						
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <button onClick={() => setShow(true)} className="map-marker">
          <Image src={map} alt="map marker"/>
        </button>
      </div>

      {/* location modal start */}
      <LocationModal show={show} setShow={setShow} handleDetail={handleDetail}/>
      {/* location modal end */}

      {/* location detail modal start */}
      <LocationDetailModal show={showDetail} setShow={setShowDetail} detailData={detailData}/>
      {/* location detail modal end */}
    </>
  )
}
