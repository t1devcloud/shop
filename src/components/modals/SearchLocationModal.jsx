import Image from 'next/image'
import close from '@/public/assets/svg/close-black.svg'
import Modal from 'react-bootstrap/Modal'
import search from '@/public/assets/svg/search.svg'
import map from '@/public/assets/svg/map-black.svg'
import { location_data } from '@/public/data/place-data'

export default function SearchLocationModal({show, handleClose}) {
  return (
    <Modal show={show} centered className='selectLocationModal modalBg' onHide={handleClose}>
      <div className="modal-header">
        <button type="button" onClick={handleClose} className="d-flex align-items-center justify-content-center">
          <Image src={close} alt="close"/>
        </button>
        <h1 className="modal-title" id="selectLocationModalLabel">Location</h1>
      </div>
      <div className="modal-body">
        <form action="#">
          <div className="grid">
            <label htmlFor="locSearch" className="d-flex align-items-center gap-8 radius-24">
              <Image src={search} alt="search" className="shrink-0"/>
              <input type="text" placeholder="Search location" className="flex-grow" id="locSearch"/>
            </label>
            <button type="button" className="radius-20">Send</button>
          </div>
        </form>

        <ul className="loc-list scrollbar-hidden">
          {
            location_data.map(({id, title, address}) => (
              <li key={id} className="d-flex align-items-center gap-12">
                <span className="d-flex align-items-center justify-content-center shrink-0 rounded-full">
                  <Image src={map} alt="icon"/>
                </span>
                <div>
                  <h5>{title}</h5>
                  <p>{address}</p>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    </Modal>
  )
}
