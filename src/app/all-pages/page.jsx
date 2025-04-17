"use client"

import { all_pages_data } from '@/public/data/all-page-data'
import Image from 'next/image'
import back from '@/public/assets/svg/menu/back-white.svg'
import box from '@/public/assets/svg/menu/box-white.svg'
import arrowRight from '@/public/assets/svg/menu/chevron-right-black.svg'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function AllPages() {
  const router = useRouter();
    
  const handleBack = () => {
    router.back();
  };

  return (
    <main>
        <div className="appbar">
          <button onClick={handleBack} className="back-page-btn">
            <Image src={back} alt="icon"/>
          </button>
          <h1>pages</h1>
        </div>
        <div className="page-content mt-55">
        {
          all_pages_data.map(({id, title, pageList}) => (
            <div  key={id}>
              <div className="pages-title">
                <h2>{title}</h2>
              </div>
              <div className="page-list">
                <ul>
                  {
                    pageList.map(({id, title, link}) => (
                      <li key={id}>
                        <Link href={link}>
                          <div className="d-flex align-items-center gap-16">
                            <span className="icon">
                              <Image src={box} alt="icon"/>
                            </span>
                            {title} page
                          </div>
                          <Image src={arrowRight} alt="icon"/>
                        </Link>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
          ))
        }
      </div>
    </main>
  )
}
