import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link';
import Router from 'next/router'
import { MenuMobile, Filter, CardProduct, HeadMeta } from '@/components'
import { ChevronLeftIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { categoryData, productData } from "../data"


function Search() {
    const router = useRouter()
    const [isFilter, setIsFilter] = useState(false)
    const [dataFilter, setDataFilter] = useState([])

    return (
        <>
            <HeadMeta title="Search" />
            <main className="to-white from-zinc-200 bg-gradient-to-t min-h-screen text-black p-4 overflow-x-hidden space-y-1">
                <div className='flex items-center justify-between w-full gap-4'>
                    <div onClick={() => Router.back()} className="bg-zinc-300 backdrop-blur text-zinc-600 p-3 rounded-full cursor-pointer">
                        <ChevronLeftIcon className="h-6 w-6" />
                    </div>
                    <div className=' flex-1 text-sm flex items-center gap-1 bg-zinc-300 rounded-xl py-1 px-3 text-zinc-600'>
                        <MagnifyingGlassIcon className="h-8 w-8" />
                        <input type="text" className="h-4 appearance-none border-0 bg-transparent w-full placeholder:text-zinc-600 focus:border-0 focus:outline-none focus:ring-0 border-r border-zinc-400" placeholder='Search...' />
                        <Filter dataFilter={dataFilter} setDataFilter={setDataFilter} isFilter={isFilter} setIsFilter={setIsFilter} title="" onClickActive={false} />
                    </div>
                </div>

                <div className=' text-2xl font-bold flex items-center pb-1.5 justify-between overflow-x-auto text-zinc-600 pt-2 gap-4'>
                    {categoryData && categoryData.map((e, i) =>
                        <Link key={i} href={e?.link} className="flex flex-col items-center hover:-translate-y-1 transition-all duration-500">
                            <p className='font-bold text-sm mt-1 hover:font-black hover:text-black '>{e?.title}</p>
                        </Link>
                    )}
                </div>

                <div className='grid grid-cols-2 overflow-x-auto sm:grid-cols-3 gap-2 pt-4 -mx-4 px-4 bg-zinc-100'>
                    {productData && productData.map((e, i) =>
                        <div key={i} className=' flex items-center justify-center'>
                            <CardProduct data={e} />
                        </div>
                    )}
                </div>

                <MenuMobile where={""} />
            </main>
        </>
    )
}

export default Search