import { useState } from 'react'
import Link from 'next/link';
import { productData } from "../data"
import { HeadMeta } from '@/components'
import Image from 'next/image'

function OrderComplete() {

    return (
        <div className="from-white to-zinc-100 bg-gradient-to-br min-h-screen">
            <HeadMeta title="Order Complete" />
            <main className="min-h-screen text-black overflow-x-hidden space-y-2">
                <div style={{ backgroundImage: `url(${"/shop/zig-zag.svg"})` }} className="flex flex-col bg-green-400 h-48 w-full text-center items-center justify-center text-3xl font-black text-white">
                    Order Complete
                </div>
                <div className="p-4 text-center text-lg space-y-4 flex flex-col items-center max-w-md mx-auto">
                    <div className='flex flex-row overflow-x-auto justify-between gap-2'>
                        {productData && productData.map((data, i) =>
                            <Image
                                key={i}
                                width={500}
                                height={500}
                                className="rounded-xl w-24 h-24 "
                                src={data?.img}
                                alt={data?.title + " | "}
                                loading="lazy"
                            />
                        )}
                    </div>

                    <svg className='' width="60" height="60" viewBox="-1 0 59 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.25 29.1875L24.8125 35.75L35.75 20.4375M53.25 27C53.25 30.4472 52.571 33.8606 51.2518 37.0454C49.9327 40.2302 47.9991 43.124 45.5616 45.5616C43.124 47.9991 40.2302 49.9327 37.0454 51.2518C33.8606 52.571 30.4472 53.25 27 53.25C23.5528 53.25 20.1394 52.571 16.9546 51.2518C13.7698 49.9327 10.876 47.9991 8.43845 45.5616C6.00091 43.124 4.06735 40.2302 2.74816 37.0454C1.42898 33.8606 0.75 30.4472 0.75 27C0.75 20.0381 3.51562 13.3613 8.43845 8.43845C13.3613 3.51562 20.0381 0.75 27 0.75C33.9619 0.75 40.6387 3.51562 45.5616 8.43845C50.4844 13.3613 53.25 20.0381 53.25 27Z" stroke="#30c48d" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                    <p className='font-semibold'>Hey Anup Srivastava, </p>
                    <p className='font-black text-2xl'>Your Order <span className="animate-pulse text-[#30c48d]">323545</span> is Confirmed!</p>
                    <p className='font-semibold text-sm pb-4 text-zinc-500'>We’ll send you a shipping confirmation
                        email as soon as your order ships.</p>
                    <Link href='/' className=" bg-black text-white w-full p-2 rounded-xl font-bold">CHECK STATUS</Link>
                </div>

            </main>
        </div>
    )
}

export default OrderComplete