import React from 'react'
import { HeadMeta, HeaderDesktop, AlertDesktop, CardProductRow, FooterDesktop } from '@/components'
import Link from 'next/link';
import { ChevronLeftIcon, LanguageIcon, CheckBadgeIcon, UserIcon, CreditCardIcon, ShoppingCartIcon, PencilIcon, EyeIcon, ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline'
import Router from 'next/router'
import Image from 'next/image'

function Profile() {
    return (
        <div className="from-white to-zinc-100 bg-gradient-to-br min-h-screen">
            <HeadMeta title="My Profile" />
            <AlertDesktop title="Join us at Shopsa from 12th to 9th June to see how many discounts you can get." badge="Discount 20%" action={<Link href="/login/" className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900">Register now <span aria-hidden="true">&rarr;</span></Link>} />
            <HeaderDesktop />
            <main className="text-black overflow-x-hidden mx-auto max-w-7xl grid grid-cols-3 xl:grid-cols-4 gap-2 xl:gap-4 py-4 px-2 xl:px-8">
                <div className='bg-zinc-100 rounded-xl p-8 col-span-2 xl:col-span-3 h-fit'>

                    <div className='space-y-10 pt-6'>
                        <div className='flex items-center gap-2'>
                            <div className='flex items-center gap-2 border-b pb-4'>
                                <Image
                                    width={100}
                                    height={100}
                                    className="rounded-full w-14 h-14 "
                                    src="/shop/profile.jpeg"
                                    alt=""
                                    loading="lazy"
                                />
                            </div>
                            <div className=" flex-1">
                                <p className='font-black text-lg'>username</p>
                                <p className=" text-sm text-zinc-400">username@gmail.com</p>
                            </div>
                            <div className="bg-green-500 text-xs text-white py-2 px-3 rounded-full flex items-center gap-1 font-bold">
                                <CheckBadgeIcon className="h-5 w-5" />
                                <p>Verify</p>
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
                </div>
                <FooterDesktop />
            </main>
        </div>
    )
}

export default Profile