import { useState } from 'react'
import { useRouter } from 'next/router'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'
import { ChevronUpDownIcon } from '@heroicons/react/24/solid'
import { MenuMobile, OrdersProduct, HeadMeta } from '@/components'
import { Dropdown } from 'flowbite-react';
import Router from 'next/router'
import { productData } from "../data"

function Orders() {
    const router = useRouter()
    const [sort, setSort] = useState("Last Orders")

    return (
        <>
            <HeadMeta title="My Orders" />
            <main className="from-zinc-100 to-white bg-gradient-to-br min-h-screen text-black p-4 overflow-x-hidden space-y-2 pb-24">
                <div className=' flex items-center justify-between'>
                    <div onClick={() => Router.back()} className="bg-zinc-300 bg-opacity-60 backdrop-blur text-zinc-600 p-2 rounded-full cursor-pointer">
                        <ChevronLeftIcon className="h-6 w-6" />
                    </div>
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
                    {productData && productData.map((e, i) =>
                        <div key={i} className=' flex items-center justify-center'>
                            <OrdersProduct data={e} />
                        </div>
                    )}
                </div>
                <MenuMobile where={""} />
            </main>
        </>
    )
}

export default Orders