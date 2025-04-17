import React from 'react'
import { useRouter } from 'next/router'
import { ChevronLeftIcon, MagnifyingGlassIcon, MapPinIcon, ReceiptPercentIcon } from '@heroicons/react/24/outline'
import Link from 'next/link';
import Router from 'next/router'
import { MyCartProduct, MenuMobile, HeadMeta } from '@/components'
import { productData } from "../data"

function Cart() {
    const router = useRouter()
    return (
        <>
            <HeadMeta title="My Cart" />
            <main className="bg-white min-h-screen p-4 pb-24 text-black overflow-x-hidden space-y-8">
                <div className="flex flex-col w-full">
                    <div className=' flex items-center justify-between'>
                        <div onClick={() => Router.back()} className="bg-zinc-300 bg-opacity-60 backdrop-blur text-zinc-600 p-2 rounded-full cursor-pointer">
                            <ChevronLeftIcon className="h-6 w-6" />
                        </div>
                        <p className=' font-black text-2xl gn-black'>My Cart</p>
                        <Link href="/p" className="bg-zinc-300 opacity-60 backdrop-blur-3xl text-zinc-600 p-2 rounded-full">
                            <MagnifyingGlassIcon className="h-6 w-6" />
                        </Link>
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <div>
                        <p className='text-sm'>Your Location</p>
                        <p className='text-xl font-bold'>Home</p>
                    </div>
                    <a href="#" className="flex gap-1 items-center py-1 px-2 text-sm border border-zinc-300 text-zinc-600 rounded-xl hover:bg-zinc-300">
                        <MapPinIcon className="h-5 w-5" />
                        <p>Change Location</p>
                    </a>
                </div>

                <div className="flex items-center bg-zinc-300 rounded-full py-2 pr-2 pl-4 text-zinc-600">
                    <ReceiptPercentIcon className="h-7 w-7" />
                    <input type="text" className=" appearance-none border-0 bg-transparent w-full placeholder:text-zinc-600 focus:border-0 focus:outline-none focus:ring-0" placeholder='discount code' />
                    <p className='text-center bg-black text-white py-2 rounded-full px-6 text-sm'>Apply</p>
                </div>

                <div className="fixed bottom-20 space-y-1 bg-zinc-200 w-11/12 -translate-x-1/2 left-1/2 py-2 px-6 rounded-xl z-30 bg-opacity-60 backdrop-blur">
                    <div className='flex items-center justify-between'>
                        <p>Subtotal Items  (4)</p>
                        <p className='font-bold'>$2550.00</p>
                    </div>
                    <div className='flex items-center justify-between'>
                        <p>Delivery Fee</p>
                        <p className='font-bold'>$10.00</p>
                    </div>
                    <hr />
                    <div className='flex items-center justify-between'>
                        <p>Total</p>
                        <p className='font-bold'>$2550.00</p>
                    </div>

                    <div onClick={() => router.push("/orderComplete/")} className='text-center bg-black text-white py-2 rounded-full px-6 text-sm cursor-pointer'>
                        Checkout
                    </div>
                </div>

                <div className='grid grid-cols-1 gap-4 pb-40'>
                    {productData && productData.map((e, i) =>
                        <MyCartProduct key={i} data={e} />
                    )}
                </div>

                <MenuMobile where={"Cart"} />
            </main>
        </>
    )
}

export default Cart