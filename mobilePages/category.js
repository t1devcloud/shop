import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { ChevronLeftIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import Link from 'next/link';
import Router from 'next/router'
import { FilterPayment, CardProduct, FilterSort, MenuMobile, HeadMeta } from '@/components'
import { categoryData, productData } from "../data"


function Category() {
    const router = useRouter()
    const [dataCat, setDataCat] = useState()
    useEffect(() => {
        setDataCat(categoryData.find(e => e.id === router.query.category))
    }, [router.query]);

    return (
        <>
            <HeadMeta title={dataCat ? dataCat.title : "Category"} />
            <main className="bg-white min-h-screen text-black overflow-x-hidden space-y-2">
                <div className="flex flex-col bg-zinc-100 h-60 p-4 w-full bg-cover bg-center" style={{ backgroundImage: `url(${dataCat?.img})` }}>
                    <div className=' flex items-center justify-between'>
                        <div onClick={() => Router.back()} className="bg-zinc-300 bg-opacity-60 backdrop-blur text-zinc-600 p-2 rounded-full cursor-pointer">
                            <ChevronLeftIcon className="h-6 w-6" />
                        </div>
                        <Link href="/p" className="bg-zinc-300 opacity-60 backdrop-blur-3xl text-zinc-600 p-2 rounded-full">
                            <MagnifyingGlassIcon className="h-6 w-6" />
                        </Link>
                    </div>
                    <div className='flex-1 flex items-center justify-center text-left'>
                        <p className=" text-6xl font-black text-white">{dataCat?.title}</p>
                    </div>
                </div>
                <div className="px-4 py-2">
                    <div className=' flex items-center justify-between'>
                        <p className=" font-bold">4 of 184 Items</p>
                        <FilterSort showFilter={false} />
                    </div>
                    <div className='grid grid-cols-2 sm:grid-cols-3 gap-2 mt-4 pb-36'>
                        {productData && productData.map((e, i) =>
                            <div key={i} className=' flex items-center justify-center'>
                                <CardProduct data={e} />
                            </div>
                        )}
                    </div>
                </div>

                <FilterPayment />
                <MenuMobile where={""} />
            </main>
        </>
    )
}

export default Category