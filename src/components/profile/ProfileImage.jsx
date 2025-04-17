"use client"

import Image from 'next/image'
import avatar from '@/public/assets/images/profile/avatar.png'
import edit from '@/public/assets/svg/edit-white.svg'
import { useState } from 'react';
import EditProfileModal from '@/components/modals/EditProfileModal';

export default function ProfileImage() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <section className="profile-image py-16">
        <div className="image">
          <Image src={avatar} alt="avatar" className="w-100 h-100 object-fit-cover img-fluid rounded-full"/>
          <button onClick={handleShow} type="button" className="d-flex align-items-center justify-content-center rounded-full">
            <Image src={edit} alt="icon"/>
          </button>
        </div>
      </section>

    {/* profile modal start */}
    <EditProfileModal show={show} handleClose={handleClose} />
    {/* profile modal end */}
    </>
  )
}
