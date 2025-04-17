import React from 'react'
import { useRouter } from 'next/router'
import { ChevronLeftIcon, CheckBadgeIcon } from '@heroicons/react/24/outline'
import Link from 'next/link';
import Router from 'next/router'
import { MenuMobile, HeadMeta, CreditPaymentDebit } from '@/components'
import Image from 'next/image'
function payment() {
    const router = useRouter()

    return (
        <>
            <HeadMeta title="My Payment" />
            <main className="bg-white min-h-screen text-black p-4 overflow-x-hidden space-y-2 pb-24">
                <div className=' flex items-center justify-between'>
                    <div onClick={() => Router.back()} className="bg-zinc-300 bg-opacity-60 backdrop-blur text-zinc-600 p-2 rounded-full cursor-pointer">
                        <ChevronLeftIcon className="h-6 w-6" />
                    </div>
                    <p className=' font-black text-2xl gn-black'>My Payment</p>
                    <div className="bg-green-500 text-xs text-white py-2 px-3 rounded-full flex items-center gap-1 font-bold">
                        <CheckBadgeIcon className="h-5 w-5" />
                        <p>Verify</p>
                    </div>
                </div>

                <div className='space-y-10 pt-6 max-w-md mx-auto'>
                    <CreditPaymentDebit />
                    <div className=" w-full flex ">
                        <Link href='/profile/' className=' bg-black font-bold text-center rounded-full w-full text-white p-4'>Save</Link>
                    </div>
                </div>

                <MenuMobile where={"Profile"} />
            </main>
        </>
    )
}

export default payment