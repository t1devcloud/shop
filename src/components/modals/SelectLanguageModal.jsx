import Modal from 'react-bootstrap/Modal';
import { select_language_data } from '@/public/data/select-language-data';
import Image from 'next/image';
import close from "@/public/assets/svg/close-black.svg"

export default function SelectLanguageModal({setShow, show, handleChange, selectedId}) {
  return (
    <Modal show={show} fullscreen className="languageModal">
      <div className="modal-header">
        <button type="button" className="back-btn modal-close rounded-full" onClick={() => setShow(false)}>
          <Image src={close} alt="Close"/>
        </button>
        <h1 className="modal-title">Select a Language</h1>
      </div>
      <div className="modal-body">
        <ul>
          {
            select_language_data.map((item) => (
              <li key={item.id}>
                <label htmlFor={item.inputId} className="lang-container">
                  <input type="radio" id={item.inputId} name="language" onChange={() => handleChange(item.id, item.title)} checked={selectedId === item.id}/>
                  {item.title}
                  <span className="checkmark"></span>
                </label>
              </li>
            ))
          }
        </ul>
      </div>
    </Modal>
  )
}
