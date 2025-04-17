import Image from 'next/image'
import star from '@/public/assets/svg/star-yellow.svg';
import map from '@/public/assets/svg/map-black.svg';
import world from '@/public/assets/svg/world-black.svg';
import subdirectory from '@/public/assets/svg/subdirectory-black.svg';
import heart from '@/public/assets/svg/heart-black.svg';
import phone from '@/public/assets/svg/phone-black.svg';
import Modal from 'react-bootstrap/Modal';
import close from '@/public/assets/svg/close-black.svg';

export default function LocationDetailModal({detailData, show, setShow}) {  
  return (
    <Modal show={show} onHide={() => setShow(false)} centered className="locationModal locationModal2">
      <div className="modal-header justify-content-between">
        <h1 className="modal-title">Nearest Location</h1>
        <button type="button" className="modal-close rounded-full" onClick={() => setShow(false)}>
          <Image src={close} alt="Close"/>
        </button>
      </div>
      <div className="modal-body">
        <ul>
          <li className='mb-20'>
            <div className="item d-flex align-items-center gap-12 w-100">
              <div className="image shrink-0 overflow-hidden radius-8">
                <Image src={detailData?.picture} alt="Place" className="img-fluid w-100 h-100 object-fit-cover"/>
              </div>

              <div className="content flex-grow">
                <h4>{detailData?.title}</h4>
                <p className="rating d-flex align-items-center gap-04">
                  <Image src={star} alt="icon"/>
                  {detailData?.rating} <span>({detailData?.review})</span>
                </p>
                <p className="d-flex align-items-center gap-8 location">
                  <Image src={map} alt="icon"/>
                  {detailData?.address} 
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="item d-flex align-items-center gap-12 w-100">
              <div className="image shrink-0 overflow-hidden radius-8">
                <Image src={detailData?.picture} alt="Place" className="img-fluid w-100 h-100 object-fit-cover"/>
              </div>

              <div className="content flex-grow">
                <h4>{detailData?.title}</h4>
                <p className="rating d-flex align-items-center gap-04">
                  <Image src={star} alt="icon"/>
                  {detailData?.rating} <span>({detailData?.review})</span>
                </p>
                <p className="d-flex align-items-center gap-8 location">
                  <Image src={map} alt="icon"/>
                  {detailData?.address} 
                </p>
              </div>
            </div>
          </li>
        </ul>

        <ul className="btn-list d-flex align-items-center justify-content-center gap-24 mt-24">
          <li>
            <a href="#" className="active d-flex align-items-center justify-content-center rounded-full">
              <Image src={world} alt="icon"/>
            </a>
          </li>
          <li>
            <a href="#" className="d-flex align-items-center justify-content-center rounded-full">
              <Image src={subdirectory} alt="icon"/>
            </a>
          </li>
          <li>
            <a href="#" className="d-flex align-items-center justify-content-center rounded-full">
              <Image src={heart} alt="icon"/>
            </a>
          </li>
          <li>
            <a href="#" className="d-flex align-items-center justify-content-center rounded-full">
              <Image src={phone} alt="icon"/>
            </a>
          </li>
        </ul>
      </div>
    </Modal>
  )
}
