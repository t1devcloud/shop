"use client"

import { location_data } from '@/public/data/location-data';
import Image from 'next/image';
import Modal from 'react-bootstrap/Modal';
import star from '@/public/assets/svg/star-yellow.svg';
import map from '@/public/assets/svg/map-black.svg';
import close from '@/public/assets/svg/close-black.svg';

export default function LocationModal({show, setShow, handleDetail}) {

  return (
    <Modal show={show} className='bottomModal modalBg locationModal' onHide={() => setShow(false)}>
      <div className="modal-header">
        <button type="button" className="modal-close rounded-full" onClick={() => setShow(false)}>
          <Image src={close} alt="Close"/>
        </button>
        <h1 className="modal-title">List Location</h1>
      </div>
      <div className="modal-body">
        <ul className="item-list">
          {
            location_data.map(({id, title, rating, review, address, picture}) => (
              <li key={id} className="item d-flex align-items-center gap-12 w-100" onClick={() => handleDetail({title, rating, review, address, picture})}>
                <div className="image shrink-0 overflow-hidden radius-8">
                  <Image src={picture} alt="Place" className="img-fluid w-100 h-100 object-fit-cover"/>
                </div>
      
                <div className="content flex-grow">
                  <h4>{title}</h4>
                  <p className="rating d-flex align-items-center gap-04">
                    <Image src={star} alt="icon"/>
                    {rating} <span>({review})</span>
                  </p>
                  <p className="d-flex align-items-center gap-8 location">
                    <Image src={map} alt="icon"/>
                    {address}
                  </p>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    </Modal>
  )
}
