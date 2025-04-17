import Image from "next/image";
import Link from "next/link";
import check from "@/public/assets/svg/check-green.svg"
import Modal from 'react-bootstrap/Modal';

export default function LoginSuccessModal({handleClose, show}) {
  return (
    <Modal centered show={show} onHide={handleClose} className="loginSuccessModal">
      <div className="modal-body text-center">
        <Image src={check} alt="Check"/>
        <h3>You have logged in successfully</h3>
        <p className="mb-32">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <Link href="/home" className="btn-primary">Continue</Link>
      </div>
    </Modal>
  )
}
