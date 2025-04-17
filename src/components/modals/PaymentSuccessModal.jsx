import Image from 'next/image'
import thumbsup from '@/public/assets/images/booking/thumsup.png'
import Link from 'next/link'
import Modal from 'react-bootstrap/Modal';

export default function PaymentSuccessModal({show, setShow}) {
  return (
    <Modal show={show} centered className='orderSuccessModal modalBg' onHide={() => setShow(false)}>
      <div className="modal-body text-center">
        <Image src={thumbsup} alt="icon"/>
        <h3 className="pt-30">Order Successful</h3>
        <p className="pt-8 pb-30">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <Link href="/home" className="btn-primary">Continue</Link>
      </div>
    </Modal>
  )
}
