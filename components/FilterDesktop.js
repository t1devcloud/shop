import React from 'react'
import { MagnifyingGlassIcon, QrCodeIcon, XMarkIcon, } from '@heroicons/react/24/outline'
import { categoryData } from "../data"
import Link from 'next/link';
import Image from 'next/image'
import { Tooltip } from 'flowbite-react';


function FilterDesktop({
    dataFilter,
    setDataFilter,
}) {
    return (

        <div className="bg-zinc-300 rounded-3xl h-fit sticky top-0">
            <div className="bg-zinc-200 rounded-t-3xl w-full h-14">
                <p className='text-2xl font-extrabold gn-black p-4'>Filter</p>

            </div>
            <div className="space-y-6 text-black font-bold p-4">
                <div className="">
                    <p>Category</p>
                    <div className='grid grid-flow-col gap-1 overflow-x-auto'>
                        {categoryData && categoryData.map((e, i) =>
                            <Link key={i} href={"/category/" + e?.id} className="flex flex-col items-center w-20 hover:translate-x-1 transition-all">
                                <Image
                                    width={500}
                                    height={500}
                                    className="rounded-full h-16 w-16 shadow-lg shadow-zinc-400 "
                                    src={e?.img}
                                    alt={e?.title + " | "}
                                    loading="lazy"
                                />
                                <p className='font-bold text-sm mt-1'>{e?.title}</p>
                            </Link>
                        )}
                    </div>
                </div>

                <div className=''>
                    <p>Gender</p>
                    <div className=" grid grid-cols-2 gap-1 items-center mt-2 font-normal overflow-x-auto">
                        <p onClick={() => dataFilter.includes("Men") ? setDataFilter(dataFilter.filter(item => item !== "Men")) : setDataFilter(e => [...e, "Men"])} className={(dataFilter.includes("Men") ? "bg-black text-white" : "text-zinc-600 bg-zinc-300 border-zinc-400 border") + " cursor-pointer py-2 px-6 text-sm rounded-xl"}>Men</p>
                        <p onClick={() => dataFilter.includes("Women") ? setDataFilter(dataFilter.filter(item => item !== "Women")) : setDataFilter(e => [...e, "Women"])} className={(dataFilter.includes("Women") ? "bg-black text-white" : "text-zinc-600 bg-zinc-300 border-zinc-400 border") + " cursor-pointer py-2 px-6 text-sm rounded-xl"}>Women</p>
                    </div>
                </div>
                <div className=''>
                    <div className='flex items-center gap-2'>
                        <p>Price Range</p>
                        <p className=' text-xs text-red-700 cursor-pointer'>remove</p>
                    </div>
                    <div className=" grid grid-cols-2 rounded-xl bg-zinc-300 font-normal mt-2 border border-zinc-400 p-1">
                        <input className="h-8 bg-transparent border-0 border-r-[0.5px] focus:border-0 focus:outline-none focus:ring-0 border-zinc-400" placeholder="min.." type="number" min="0" max="100000" />
                        <input className="h-8 bg-transparent border-0 border-l-[0.5px] focus:border-0 focus:outline-none focus:ring-0 border-zinc-400" placeholder="max.." type="number" min="0" max="100000" />
                    </div>
                </div>
                <div className=''>
                    <p>Size</p>
                    <div className="grid grid-flow-col justify-start gap-6 items-center font-black mt-2 overflow-x-auto">
                        {["S", "M", "L", "XL"].map((itemE, i) =>
                            <p onClick={() => dataFilter.includes(itemE) ? setDataFilter(dataFilter.filter(item => item !== itemE)) : setDataFilter(e => [...e, itemE])} className={(dataFilter.includes(itemE) ? "bg-black text-white" : "text-zinc-600 bg-zinc-300 border-zinc-400 border") + " cursor-pointer p-2 h-10 w-10 rounded-full flex items-center text-center justify-center"} key={i}>{itemE}</p>
                        )}
                    </div>
                </div>
                <div className=''>
                    <p>Color</p>
                    <div className=" grid grid-flow-col justify-start gap-6 items-center font-normal mt-2 overflow-x-auto">
                        {["#FFC700", "#FF0000", "#0019FF", "#33FF00", "#740276"].map((itemE, i) =>
                            <p onClick={() => dataFilter.includes(itemE) ? setDataFilter(dataFilter.filter(item => item !== itemE)) : setDataFilter(e => [...e, itemE])} className={(dataFilter.includes(itemE) ? "" : "border-zinc-200 border-[6px]") + " cursor-pointer h-8 w-8 rounded-full flex items-center text-center justify-center"} key={i} style={{ "background": itemE }}></p>
                        )}
                    </div>
                </div>
            </div>
            <div className=' flex items-center text-white gap-2 p-2 text-sm'>
                <div onClick={() => [setDataFilter([])]} className="hover:bg-zinc-600 duration-500 transition-colors hover:text-white cursor-pointer flex-1 bg-zinc-300 font- text-zinc-600 font-semibold p-2 rounded-full flex items-center gap-2">
                    <XMarkIcon className="w-5 xl:h-7 h-5 xl:w-7 p-1 rounded-full border border-zinc-600" />
                    <p>Reset all</p>
                </div>
                <div onClick={() => []} className="cursor-pointer hover:translate-x-1 transition-all duration-500 bg-black p-3 xl:p-6 py-2 rounded-full flex items-center gap-2">
                    <p>Apply Filter</p>
                    <p className='flex items-center justify-center font-bold text-base xl:text-lg'>{dataFilter.length}</p>
                </div>
            </div>
        </div>
    )
}

export default FilterDesktop