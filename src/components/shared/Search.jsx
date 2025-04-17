"use client"

import Image from 'next/image'
import searchIcon from '@/public/assets/svg/search.svg'
import filter from '@/public/assets/svg/filter-black.svg'
import { useState } from 'react';
import FilterModal from '@/components/modals/FilterModal';

export default function Search() {
  const [show, setShow] = useState(false);

  return (
    <>
      <section className="search py-12">
        <form action="#">
          <div className="form-inner w-100 d-flex align-items-center gap-8 radius-24">
            <Image src={searchIcon} alt="search" className="shrink-0"/>
            <input type="search" className="input-search input-field" placeholder="Search..."/>
            <div className="filter shrink-0">
              <button onClick={() => setShow(true)} type="button" className="d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#filterModal">
                <Image src={filter} alt="filter"/>
              </button>
            </div>
          </div>
        </form>
      </section>

      {/* filter modal start */}
      <FilterModal show={show} setShow={setShow} />
      {/* filter modal end */}
    </>
  )
}
