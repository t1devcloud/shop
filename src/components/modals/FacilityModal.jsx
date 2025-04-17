import Modal from 'react-bootstrap/Modal';
import close from '@/public/assets/svg/close-black.svg'
import Image from 'next/image';
import { hotel_facilities } from '@/public/data/hotel-facility';
import FacilityCard from '../shared/FacilityCard';

export default function FacilityModal({show, setShow}) {
  return (
    <Modal show={show} className="serviceModal bottomModal modalBg" onHide={() => setShow(false)}>
      <div className="modal-header">
        <button type="button" className="modal-close rounded-full" onClick={() => setShow(false)}>
          <Image src={close} alt="Close"/>
        </button>
        <h1 className="modal-title">All Facilities</h1>
      </div>
      <div className="modal-body">
        <div className="facilities">
          <div className="grid gap-24">
            {
              hotel_facilities.map((item) => <FacilityCard key={item.id} data={item}/>)
            }
          </div>
        </div>
      </div>
    </Modal>
  )
}
