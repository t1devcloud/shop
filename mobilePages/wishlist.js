import React from 'react'
import { useRouter } from 'next/router'
import { ChevronLeftIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import Link from 'next/link';
import Router from 'next/router'
import { HeadMeta, CardProductRow, MenuMobile } from '@/components'
import { productData } from "../data"

function Wishlist() {
  const router = useRouter()
  return (
    <>
      <HeadMeta title="My Wishlist" />
      <main className="to-white from-zinc-200 bg-gradient-to-t min-h-screen p-4 pb-24 text-black overflow-x-hidden space-y-6">
        <div className=' flex items-center justify-between'>
          <div onClick={() => Router.back()} className="bg-zinc-300 bg-opacity-60 backdrop-blur text-zinc-600 p-2 rounded-full cursor-pointer">
            <ChevronLeftIcon className="h-6 w-6" />
          </div>
          <p className=' font-black text-2xl gn-black'>My Wishlist</p>
          <Link href="/p" className="bg-zinc-300 opacity-60 backdrop-blur-3xl text-zinc-600 p-2 rounded-full">
            <MagnifyingGlassIcon className="h-6 w-6" />
          </Link>
        </div>
        <div className='bg-zinc-100 -mx-4 px-4 pt-6'>
          <div className=' flex items-center justify-between'>
            <p className='font-bold text-zinc-600 pb-2'>Best Product</p>
            <p className='font-bold text-zinc-600 pb-2'>4 Items</p>
          </div>
          <div className='grid grid-cols-1 gap-4'>
            {productData && productData.map((e, i) =>
              <CardProductRow key={i} data={e} />
            )}
          </div>
        </div>

        <MenuMobile where={"Wishlist"} />
      </main>
    </>
  )
}

export default Wishlist