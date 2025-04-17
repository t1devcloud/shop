import Image from 'next/image';
import Link from 'next/link';
import Modal from 'react-bootstrap/Modal';
import { service_data } from '@/public/data/service-data';
import close from '@/public/assets/svg/close-black.svg'

export default function ServiceModal({show, setShow}) {
  return (
    <Modal show={show} className='bottomModal modalBg serviceModal' onHide={() => setShow(false)}>
      <div className="modal-header">
        <button type="button" className="modal-close rounded-full" onClick={() => setShow(false)}>
          <Image src={close} alt="Close"/>
        </button>
        <h1 className="modal-title">All Services</h1>
      </div>
      <div className="modal-body">
        {
          service_data.map(({id, title, picture}) => (
            <Link key={id} href="/service-location">
              <figure className="item text-center">
                <div className="image rounded-full d-flex align-items-center justify-content-center m-auto">
                  <Image src={picture} alt={title} className="img-fluid backface-hidden"/>
                </div>
                <figcaption>{title}</figcaption>
              </figure>
            </Link>
          ))
        }
      </div>
    </Modal>
  )
}
