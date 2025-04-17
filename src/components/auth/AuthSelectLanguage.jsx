"use client"

import Image from "next/image"
import Link from "next/link"
import download from "@/public/assets/svg/arrow-ios-downward.svg"
import arrow from "@/public/assets/svg/arrow-left-black.svg"
import { useState } from "react"
import SelectLanguageModal from "@/components//modals/SelectLanguageModal"
import { useRouter } from "next/navigation"

export default function AuthSelectLanguage() {
  const [show, setShow] = useState(false);
  const [selectedId, setSelectedId] = useState(1);
  const [selectedTitle, setSelectedTitle] = useState("English (UK)");
  const router = useRouter();

  const handleChange = (id, title) => {
    setSelectedId(id);
    setSelectedTitle(title);
  };

  function handleShow() {
    setShow(true);
  }

  const handleBack = () => {
    router.back();
  };

  return (
    <>
      <section className="auth signin-email select-lang">
        <div className="page-title">
          <button onClick={handleBack} type="button" className="back-btn back-page-btn d-flex align-items-center justify-content-center rounded-full">
            <Image src={arrow} alt="Icon"/>
          </button>
        </div>
        
        <div className="heading">
          <h2>Select your Language</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
    
        <div className="auth-form">
          <form action="#">
            <div>
              <label htmlFor="languange">Languange</label>
              <div className="position-relative">
                <input type="text" id="languange" placeholder="Select languange" value={selectedTitle} readonly className="input-field" onClick={handleShow}/>
                <Image src={download} alt="Arrow" className="arrow"/>
              </div>
            </div>
            <Link href="/home" className="btn-primary">Continue</Link>
          </form>
        </div>
      </section>

      {/* select language modal start */}
      <SelectLanguageModal setShow={setShow} show={show} handleChange={handleChange} selectedId={selectedId}/>
      {/* select language modal end */}
    </>
  )
}
