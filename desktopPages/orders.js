import { useState } from 'react'
import { HeadMeta, HeaderDesktop, AlertDesktop, OrdersProduct, FooterDesktop } from '@/components'
import Link from 'next/link';
import { ChevronUpDownIcon } from '@heroicons/react/24/solid'
import { Dropdown } from 'flowbite-react';
import { productData } from "../data"

function Orders() {
    const [sort, setSort] = useState("Last Orders")

    return (
        <div className="from-white to-zinc-100 bg-gradient-to-br min-h-screen">
            <HeadMeta title="My Orders" />
            <AlertDesktop title="Join us at Shopsa from 12th to 9th June to see how many discounts you can get." badge="Discount 20%" action={<Link href="/login/" className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900">Register now <span aria-hidden="true">&rarr;</span></Link>} />
            <HeaderDesktop />
            <main className="text-black overflow-x-hidden mx-auto max-w-7xl grid grid-cols-3 xl:grid-cols-4 gap-2 xl:gap-4 py-4 px-2 xl:px-8">
                <div className='bg-zinc-100 rounded-xl p-8 h-fit col-span-2 xl:col-span-3'>
                    <div className=' flex items-center justify-between'>
                        <p className=' font-black text-2xl gn-black'>My Orders</p>

                        <div className="rounded-xl gap-1 p-2 text-xs flex items-center bg-zinc-300 bg-opacity-60 backdrop-blur text-zinc-600">
                            <ChevronUpDownIcon className="h-5 w-5" />
                            <Dropdown
                                inline
                                dismissOnClick
                                label={sort}
                                arrowIcon={false}
                            >
                                <Dropdown.Item onClick={(e) => setSort("Last Orders")}>
                                    Last Orders
                                </Dropdown.Item>
                                <Dropdown.Item onClick={(e) => setSort("Pending")}>
                                    Pending
                                </Dropdown.Item>
                                <Dropdown.Item onClick={(e) => setSort("Received")}>
                                    Received
                                </Dropdown.Item>
                                <Dropdown.Item onClick={(e) => setSort("Cancelled")}>
                                    Cancelled
                                </Dropdown.Item>
                            </Dropdown>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 gap-4 pt-10'>
                        {productData && productData.slice(2,5).map((e, i) =>
                            <div key={i} className=' flex items-center justify-center'>
                                <OrdersProduct data={e} />
                            </div>
                        )}
                    </div>
                </div>
                <FooterDesktop />
            </main>
        </div>
    )
}

export default Orders