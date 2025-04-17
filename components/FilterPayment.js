import { useState } from 'react'
import { FunnelIcon, ShoppingCartIcon } from '@heroicons/react/24/solid'
import Filter from "./Filter"
import Link from 'next/link';

function FilterPayment() {
    const [isFilter, setIsFilter] = useState(false)
    const [dataFilter, setDataFilter] = useState([])
    return (
        <div className=" fixed bottom-20 shadow-xl rounded-full w-11/12 left-1/2 -translate-x-1/2 grid grid-cols-4 items-center">
            <div className='flex items-center gap-2 bg-white rounded-l-full py-4 pl-6 pr-2 col-span-2 text-black'>
                <Filter dataFilter={dataFilter} setDataFilter={setDataFilter} isFilter={isFilter} setIsFilter={setIsFilter} title={<p className='font-bold ml-2'>Add filter</p>} onClickActive={false} />
            </div>
            <Link href="/cart" className='flex items-center gap-2 bg-black rounded-r-full py-4 pr-6 pl-2 col-span-2 text-white'>
                <ShoppingCartIcon className="h-6 w-6" />
                <p className='font-bold'>Cart Empty</p>
            </Link>
        </div>
    )
}

export default FilterPayment