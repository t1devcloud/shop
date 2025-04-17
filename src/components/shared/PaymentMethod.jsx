import Image from 'next/image'
import visa from '@/public/assets/images/booking/visa.png'
import master from '@/public/assets/images/booking/master.png'

export default function PaymentMethod() {
  return (
    <section className="payment-method pt-12">
      <div className="title mb-16">
        <h4>Payment Method</h4>
      </div>
      <ul>
        <li className="mb-16">
          <label htmlFor="visa" className="pay-card-container d-flex align-items-center gap-20">
            <Image src={visa} alt="Visa"/>
            <span>•••• •••• •••• 87652</span>
            <input type="radio" name="pay-card" id="visa"/>
            <span className="checkmark"></span>
          </label>
        </li>
        <li>
          <label htmlFor="master" className="pay-card-container d-flex align-items-center gap-20">
            <Image src={master} alt="master"/>
            <span>•••• •••• •••• 87652</span>
            <input type="radio" name="pay-card" id="master"/>
            <span className="checkmark"></span>
          </label>
        </li>
      </ul>
    </section>
  )
}
