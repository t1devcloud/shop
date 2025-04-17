import { useState } from 'react'
import { CheckCircleIcon, ArrowPathIcon } from '@heroicons/react/24/outline'
import Link from 'next/link';
import Image from 'next/image'

function OrdersProduct({ data }) {
    return (
        <div className=" from-zinc-200 to-zinc-100 shadow-lg bg-gradient-to-r w-full p-4 rounded-xl space-y-3">
            <div>
                <p className=' font-black text-lg'>ID: 95 259105</p>
            </div>
            <div className=" flex items-center justify-between">
                <div>
                    <p className=" text-zinc-600 text-xs">7 Dec, 19</p>
                    <p className=' font-bold'>Berlin</p>
                </div>
                <div>
                    <p className=" text-zinc-600 text-xs">8 Dec, 26</p>
                    <p className=' font-bold'>Dortmund</p>
                </div>
            </div>
            <div className=' pt-10 flex items-center justify-between gap-2 relative'>
                <div className="bg-zinc-300 w-full absolute h-1"></div>
                <div className="bg-primary w-[70%] absolute h-1"></div>
                <div className='z-10 relative flex items-center text-center justify-start'>
                    <p className='text-xs absolute -top-4 font-bold text-zinc-600'>Packing</p>
                    <div className="border-4 border-zinc-200 bg-primary rounded-full h-6 w-6 items-center justify-center flex">
                        <CheckCircleIcon className=' h-6 w-6 text-zinc-200' />
                    </div>
                </div>
                <div className='z-10 relative w-24 flex items-center text-center justify-center'>
                    <p className='text-xs absolute -top-4 font-bold text-zinc-600'>In Country</p>
                    <div className="border-4 border-zinc-200 bg-primary rounded-full h-6 w-6 items-center justify-center flex">
                        <CheckCircleIcon className=' h-6 w-6 text-zinc-200' />
                    </div>
                </div>
                <div className='z-10 scale-125 relative w-24 flex items-center text-center justify-center'>
                    <p className='text-xs absolute -top-4 font-bold text-zinc-600'>In City</p>
                    <div className="border-4 border-zinc-200 bg-primary rounded-full h-6 w-6 items-center justify-center flex">
                        <ArrowPathIcon className='animate-pulse h-3 w-3 text-zinc-200' />
                    </div>
                </div>
                <div className='z-10 relative flex items-center text-center justify-end'>
                    <p className='text-xs absolute -top-4 font-bold text-zinc-600'>Arrived</p>
                    <div className="border-4 border-zinc-200 bg-zinc-300 rounded-full h-6 w-6 items-center justify-center flex">
                        <div className=' h-2 w-2 rounded-full bg-zinc-200'></div>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-between gap-4 py-2 px-3 rounded-xl bg-zinc-300'>
                <Image
                    width={500}
                    height={500}
                    className="rounded-xl w-16 h-16 "
                    src={data?.img}
                    alt={data?.title + " | "}
                    loading="lazy"
                />
                <div className=' flex-1'>
                    <p className=' font-bold w-24 lg:w-60 text-sm lg:text-base truncate'>{data.title}</p>
                    <p className=" text-zinc-600 text-sm">For men</p>
                </div>
                <div className=' border-l-2 pl-2'>
                    <p>{data.price}</p>
                </div>
            </div>
        </div>
    )
}

export default OrdersProduct