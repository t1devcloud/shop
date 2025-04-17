"use client"

import { useState } from "react";
import LogoutModal from "@/components/modals/LogoutModal";

export default function LogoutButton() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* logout button start */}
      <div className="py-32">
        <button type="button" className="btn-primary-outline" onClick={handleShow}>Log Out</button>
      </div>
      {/* logout button end */}

      {/* login success modal start */}
      <LogoutModal handleClose={handleClose} show={show}/>
      {/* login success modal end */}
    </>
  )
}
