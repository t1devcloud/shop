import { useState } from 'react'
import Image from 'next/image'
import { dataAds } from "../data"
import Link from 'next/link';

function FooterDesktop() {
    return (
        <div className='space-y-4'>
            {/* <div className='w-full rounded-3xl p-4 bg-zinc-200 text-sm shadow-xl'>
                <div className="container mx-auto">
                    <h2 className="text-2xl font-black gn-black mb-2">Contact Us</h2>
                    <form action="/" method="POST">
                        <div className="mb-4">
                            <label className="block mb-2" htmlFor="name">Your Name</label>
                            <input required type="text" className="w-full bg-zinc-300 border-0 rounded-xl focus:ring-0" id="name" name="name" placeholder="Your Name" />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2" htmlFor="email">Your Email</label>
                            <input required type="email" className="w-full bg-zinc-300 border-0 rounded-xl focus:ring-0" id="email" name="email" placeholder="Your Email" />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2" htmlFor="message">Your Message</label>
                            <textarea required className="w-full bg-zinc-300 border-0 rounded-xl focus:ring-0" id="message" name="message" placeholder="Your Message"></textarea>
                        </div>
                        <button type="submit" className="bg-black w-full text-white p-2 text-center rounded-full">Send</button>
                    </form>
                </div>
            </div> */}

            <div className='w-full rounded-3xl bg-zinc-200 overflow-hidden relative'>
                <h2 className=" text-opacity-60 font-bold absolute left-4 bottom-4 text-white">Ad</h2>
                <Image
                    src={dataAds[0].img}
                    width={50}
                    height={50}
                    className="w-full"
                    alt=""
                    loading="lazy"
                />
            </div>

            <div className='w-full flex flex-col rounded-3xl p-4 bg-zinc-200 space-y-4'>
                <div className='text-start'>
                    <p className='text-3xl font-black gn-black uppercase'>Shopsa</p>
                    <p className='text-zinc-500 text-sm xl:text-base'>Find anything what you want !</p>
                </div>
                <ul className="list-reset grid grid-cols-2 text-sm font-bold">
                    <li><Link href="#">About</Link></li>
                    <li><Link href="#">Contact</Link></li>
                    <li><Link href="#">Terms of Service</Link></li>
                    <li><Link href="#">Privacy Policy</Link></li>
                </ul>
                <p className="text-zinc-400 text-center text-xs xl:text-sm">Copyright © 2023 Company Name</p>
            </div>

        </div>
    )
}

export default FooterDesktop