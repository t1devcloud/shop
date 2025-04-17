import Image from 'next/image'
import close from '@/public/assets/svg/close-black.svg'
import Modal from 'react-bootstrap/Modal';

export default function LogoutModal({handleClose, show}) {
  return (
    <Modal centered show={show} className='modalBg logOutModal' onHide={handleClose}>
      <div className="modal-header justify-content-end">
        <button type="button" onClick={handleClose} className="close-btn d-flex align-items-center justify-content-center rounded-full">
          <Image src={close} alt="icon"/>
        </button>
      </div>
      <div className="modal-body text-center">
        <h4 className="mb-32">Are you sure you want to logout?</h4>
        <ul>
          <li className="mb-04">
            <button type="button" onClick={handleClose}>Cancel</button>
          </li>
          <li>
            <button type="button" className="log-out" onClick={handleClose}>Log Out</button>
          </li>
        </ul>
      </div>
    </Modal>
  )
}
