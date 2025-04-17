import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link';
import { HeadMeta, HeaderDesktop, AlertDesktop, FilterDesktop, Sort, CardProduct } from '@/components'
import Image from 'next/image'
import { productData } from "../data"

function Search() {
    const [dataFilter, setDataFilter] = useState([])
    return (
        <>
            <div className="from-white to-zinc-100 bg-gradient-to-br min-h-screen">
                <HeadMeta title="Search" />

                <AlertDesktop title="Join us at Shopsa from 12th to 9th June to see how many discounts you can get." badge="Discount 20%" action={<Link href="/login/" className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900">Register now <span aria-hidden="true">&rarr;</span></Link>} />
                <HeaderDesktop />
                <main className="text-black overflow-x-hidden mx-auto max-w-[1536px] pb-4 pt-6 grid grid-cols-3 xl:grid-cols-4 px-4 xl:px-8 overflow-y-auto h-screen gap-2">
                    <FilterDesktop dataFilter={dataFilter} setDataFilter={setDataFilter} />
                    <div className='col-span-2 xl:col-span-3 bg-zinc-300 rounded-3xl'>
                        <div className='bg-zinc-200 rounded-t-3xl h-14 flex items-center justify-between px-4 xl:px-8'>
                            <p className='text-2xl font-extrabold gn-black'>Explore</p>
                            <Sort />
                        </div>
                        <div className='grid grid-cols-3 xl:grid-cols-4 gap-2 xl:gap-4 p-4'>
                            {productData && productData.map((e, i) =>
                                <div key={i} className=' flex items-center justify-center'>
                                    <CardProduct data={e} />
                                </div>
                            )}
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default Search