import Image from 'next/image'
import arrow from '@/public/assets/svg/arrow-ios-back.svg'

export default function ProfileAddress() {
  return (
    <section className="add-address p-24 pt-0">
      <form action="#">
        <div className="mb-24">
          <label>Full Name</label>
          <input type="text" placeholder="Enter Full Name / Home / Office " className="input-field"/>
        </div>
        <div className="mb-24">
          <label>Country</label>
          <div className="position-relative">
            <Image src={arrow} alt="icon" className="icon"/>
            <select className="input-field">
              <option value="0">Select Country</option>
              <option value="1">America</option>
              <option value="2">Bangladesh</option>
              <option value="3">Canada</option>
              <option value="4">India</option>
              <option value="5">London</option>
            </select>
          </div>
        </div>
        <div className="mb-24">
          <label>City</label>
          <div className="position-relative">
            <Image src={arrow} alt="icon" className="icon"/>
            <select className="input-field">
              <option value="0">Select City</option>
              <option value="1">Dhaka</option>
              <option value="2">Los Angeles</option>
              <option value="3">Wichita</option>
              <option value="4">Kolkata</option>
              <option value="5">Philadelphia</option>
            </select>
          </div>
        </div>
        <div className="mb-24">
          <label>State</label>
          <div className="position-relative">
            <Image src={arrow} alt="icon" className="icon"/>
            <select className="input-field">
              <option value="0">Select State</option>
              <option value="1">Montgomery</option>
              <option value="2">Anchorage</option>
              <option value="3">Chicago</option>
              <option value="4">Louisville</option>
              <option value="5">Detroit</option>
            </select>
          </div>
        </div>
        <div className="mb-24">
          <label>Zip Code</label>
          <input type="text" placeholder="Enter Zip Code" className="input-field"/>
        </div>
        <div className="mb-32">
          <label>Detail Address</label>
          <textarea placeholder="Enter Your Address" className="input-field"></textarea>
        </div>
        <div>
          <button type="button" className="btn-primary" disabled>Save Address</button>
        </div>
      </form>
    </section>
  )
}
