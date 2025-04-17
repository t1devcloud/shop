import React from 'react'
import { useRouter } from 'next/router'
import { ChevronLeftIcon, LanguageIcon, CheckBadgeIcon, UserIcon, CreditCardIcon, ShoppingCartIcon, PencilIcon, EyeIcon, ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline'
import Link from 'next/link';
import Router from 'next/router'
import { MenuMobile, HeadMeta } from '@/components'
import Image from 'next/image'

function Profile() {
    const router = useRouter()
    return (
        <>
            <HeadMeta title="My Profile" />
            <main className="bg-white min-h-screen text-black p-4 overflow-x-hidden space-y-2 pb-24">
                <div className=' flex items-center justify-between'>
                    <div onClick={() => Router.back()} className="bg-zinc-300 bg-opacity-60 backdrop-blur text-zinc-600 p-2 rounded-full cursor-pointer">
                        <ChevronLeftIcon className="h-6 w-6" />
                    </div>
                    <p className=' font-black text-2xl gn-black'>My Profile</p>
                    <div className="bg-green-500 text-xs text-white py-2 px-3 rounded-full flex items-center gap-1 font-bold">
                        <CheckBadgeIcon className="h-5 w-5" />
                        <p>Verify</p>
                    </div>
                </div>

                <div className='space-y-10 pt-6'>
                    <div className='flex items-center gap-2 border-b pb-4'>
                        <Image
                            width={100}
                            height={100}
                            className="rounded-full w-14 h-14 "
                            src="/shop/profile.jpeg"
                            alt=""
                            loading="lazy"
                        />
                        <div className=" flex-1">
                            <p className='font-black text-lg'>username</p>
                            <p className=" text-sm text-zinc-400">username@gmail.com</p>
                        </div>
                    </div>
                    <div className='space-y-3'>
                        <p className=" text-sm text-zinc-400">ACCOUNT</p>
                        <div className='text-zinc-500 bg-zinc-100 rounded-xl p-2 flex items-center gap-1'>
                            <UserIcon className="h-6 w-6" />
                            <p className=" font-semibold">Profile Data</p>
                        </div>
                        <Link href="/payment/" className='hover:bg-primary hover:text-white bg-zinc-200 rounded-xl p-2 flex items-center gap-1'>
                            <CreditCardIcon className="h-6 w-6" />
                            <p className=" font-semibold">Biling & Payment</p>
                        </Link>
                        <Link href="/orders" className='hover:bg-primary hover:text-white bg-zinc-200 rounded-xl p-2 flex items-center gap-1'>
                            <ShoppingCartIcon className="h-6 w-6" />
                            <p className=" font-semibold">Orders</p>
                        </Link>
                    </div>
                    <div className='space-y-3'>
                        <p className=" text-sm text-zinc-400">SETTINGS</p>
                        <div className='text-zinc-500 bg-zinc-100 rounded-xl p-2 flex items-center gap-1'>
                            <PencilIcon className="h-6 w-6" />
                            <p className=" font-semibold">Account Details</p>
                        </div>
                        <div className='text-zinc-500 bg-zinc-100 rounded-xl p-2 flex items-center gap-1'>
                            <EyeIcon className="h-6 w-6" />
                            <p className=" font-semibold">Change Password</p>
                        </div>
                    </div>
                    <div className='space-y-3'>
                        <p className=" text-sm text-zinc-400">PREFERENCE</p>
                        <div className='text-zinc-500 bg-zinc-100 rounded-xl p-2 flex items-center gap-1'>
                            <LanguageIcon className="h-6 w-6" />
                            <p className=" font-semibold">Language</p>
                        </div>
                        <Link href="/login/" className='hover:bg-primary hover:text-white bg-zinc-200 rounded-xl p-2 flex items-center gap-1'>
                            <ArrowLeftOnRectangleIcon className="h-6 w-6" />
                            <p className=" font-semibold">Sign out</p>
                        </Link>
                    </div>
                </div>

                <MenuMobile where={"Profile"} />
            </main>
        </>
    )
}

export default Profile