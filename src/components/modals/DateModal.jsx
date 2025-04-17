import Modal from 'react-bootstrap/Modal';
import DatePicker from "react-datepicker";

export default function DateModal({show, handleClose, startDate, handleDateSelected}) {
  
  return (
    <Modal centered show={show} className='modalBg dateOfBirthModal dateModal' onHide={handleClose}>
      <div className="modal-header justify-content-center">
        <h1 className="modal-title" id="dateOfBirthModalLabel">Date Of Birth</h1>
      </div>
      <div className="modal-body">

        <DatePicker selected={startDate} onChange={(date) => handleDateSelected(date)} inline  dateFormat="DD/MM/yyyy" />

        <div className="btns d-flex align-items-center gap-16">
          <button type="button" className="radius-20 w-50 cancel-btn" onClick={handleClose}>Cancel</button>
          <button type="button" className="radius-20 w-50 apply-btn" onClick={handleClose}>Apply</button>
        </div>
      </div>
    </Modal>
  )
}
