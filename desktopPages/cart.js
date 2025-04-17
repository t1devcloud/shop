import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link';
import { HeadMeta, HeaderDesktop, MyCartProduct, CreditPaymentDebit } from '@/components'
import { MapPinIcon, ReceiptPercentIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { productData } from "../data"

function Cart() {
    const router = useRouter()

    return (
        <>
            <div className="from-white to-zinc-100 bg-gradient-to-br min-h-screen">
                <HeadMeta title="Cart" />

                {/* <AlertDesktop title="Join us at Shopsa from 12th to 9th June to see how many discounts you can get." badge="Discount 20%" action={<Link href="/login/" className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900">Register now <span aria-hidden="true">&rarr;</span></Link>} /> */}
                <HeaderDesktop />
                <main className="text-black overflow-x-hidden mx-auto max-w-7xl pb-4 pt-10 grid grid-cols-3 px-4 xl:px-8 gap-4">
                    <div className='col-span-2 space-y-4 bg-zinc-100 rounded-xl p-4'>
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
                        <div className='grid grid-cols-1 gap-4'>
                            {productData && productData.slice(0, 4).map((e, i) =>
                                <MyCartProduct key={i} data={e} />
                            )}
                        </div>
                    </div>
                    <div className=' space-y-6'>
                        <CreditPaymentDebit />

                        <div className="space-y-4 bg-zinc-200 p-4 rounded-xl h-fit">
                            <div className='flex items-center justify-between'>
                                <p>Subtotal Items  (2)</p>
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
                    </div>
                </main>
            </div>
        </>
    )
}

export default Cart