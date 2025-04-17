"use client"

import Image from 'next/image';
import Modal from 'react-bootstrap/Modal';
import camera from '@/public/assets/svg/camera-fill-black.svg';
import file from '@/public/assets/svg/file-fill-black.svg';
import trash from '@/public/assets/svg/trash-fill-red.svg';
import close from '@/public/assets/svg/close-black.svg'

export default function EditProfileModal({show, handleClose}) {
  return (
    <Modal centered show={show} onHide={handleClose} className='modalBg editImageModal'>
      <div className="modal-header justify-content-between">
        <h1>Change your picture</h1>
        <button onClick={handleClose}>
          <Image src={close} alt="close"/>
        </button>
      </div>
      <div className="modal-body">
        <ul>
          <li>
            <button type="button" className="d-flex align-items-center gap-16 radius-8 action-btn">
              <Image src={camera} alt="icon" className="shrink-0"/>
              Take a photo
            </button>
          </li>
          <li>
            <label htmlFor="choose-file" className="d-block w-100">
              <input type="file" id="choose-file"/>
              <span className="d-flex align-items-center gap-16 radius-8 action-btn">
                <Image src={file} alt="icon" className="shrink-0"/>
                Choose from your file
              </span>
            </label>
          </li>
          <li>
            <button type="button" className="d-flex align-items-center gap-16 radius-8 action-btn delete">
              <Image src={trash} alt="icon" className="shrink-0"/>
              Delete Photo
            </button>
          </li>
        </ul>
      </div>
    </Modal>
  )
}
