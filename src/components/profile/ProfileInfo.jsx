"use client"

import Image from "next/image";
import calender from "@/public/assets/svg/calendar-blue.svg";
import { useState } from "react";
import DateModal from "@/components/modals/DateModal";
import Link from "next/link";

export default function ProfileInfo() {
  const [startDate, setStartDate] = useState(new Date());
  const [formValue, setFormValue] = useState({
    firstName: "Andy",
    lastName: "Lexsian",
    email: "example@mail.com",
    dateOfBirth: "2000/11/11",
    gender: "male",
    location: ""
  })
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleDateSelected = (date) => {
    setStartDate(date)
    setFormValue({
      ...formValue,
      dateOfBirth: date
    })
  }

  return (
    <>
      <section className="user-info px-24">
        <div className="mb-16">
          <label className="input-label">First Name</label>
          <input type="text" placeholder="First Name" value={formValue.firstName} onChange={(e) => setFormValue({...formValue, firstName: e.target.value})} className="input"/>
        </div>
        <div className="mb-16">
          <label className="input-label">Last Name</label>
          <input type="text" placeholder="Last Name" value={formValue.lastName} onChange={(e) => setFormValue({...formValue, lastName: e.target.value})} className="input"/>
        </div>
        <div className="mb-16">
          <label className="input-label">E-mail</label>
          <input type="email" placeholder="E-mail" value={formValue.email} onChange={(e) => setFormValue({...formValue, email: e.target.value})} className="input"/>
        </div>
        <div className="mb-16">
          <label className="input-label">Date of Birth</label>
          <div className="dob position-relative d-flex align-items-center">
            <input type="text" placeholder="Date of Birth" className="input" id="dobdate" value={formValue.dateOfBirth}/>
            <button type="button" onClick={handleShow}>
              <Image src={calender} alt="icon"/>
            </button>
          </div>
        </div>

        <div className="mb-16">
          <label className="input-label">Gender</label>
          <div className="grid">
            <label htmlFor="male" className="custom-check-container gender-container">
              <input type="radio" name="gender" id="male" value="male" onChange={(e) => setFormValue({...formValue, gender: e.target.value})} checked={formValue.gender === "male"}/>
              Male
              <span className="checkmark"></span>
            </label>
            <label htmlFor="female" className="custom-check-container gender-container">
              <input type="radio" name="gender" id="female" value="female" onChange={(e) => setFormValue({...formValue, gender: e.target.value})} checked={formValue.gender === "female"}/>
              Female
              <span className="checkmark"></span>
            </label>
          </div>
        </div>

        <div>
          <label className="input-label">Location</label>
          <textarea id="myTextarea" placeholder="Location" className="input" value={formValue.location} onChange={(e) => setFormValue({...formValue, location: e.target.value})}></textarea>
        </div>
      </section>

      {/* date modal start */}
      <DateModal show={show} handleClose={handleClose} startDate={startDate} handleDateSelected={handleDateSelected}/>
      {/* date modal end */}

      {/*  save-btn start  */}
      <div className="save-btn mt-64 px-24 mb-32">
        <Link href="/profile/user-profile" className="btn-primary">Save Changes</Link>
      </div>
    </>
  )
}
