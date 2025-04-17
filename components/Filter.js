import React from 'react'
import { Dropdown, Modal } from 'flowbite-react';
import { FunnelIcon, XMarkIcon, } from '@heroicons/react/24/outline'
import Image from 'next/image'

function Filter({
    dataFilter,
    setDataFilter,
    isFilter,
    setIsFilter,
    title = null,
    onClickActive = true
}) {

    return (
        <>
            <div onClick={(e) => setIsFilter(true)} className={(onClickActive ? "hover:text-white hover:bg-primary hover:-translate-y-1 transition-all" : "") + " cursor-pointer rounded-xl p-1 flex items-center px-2"}>
                <FunnelIcon className={(dataFilter.length > 0 ? "text-primary" : "") + " h-6 w-6"} />
                <p className={(dataFilter.length > 0 ? "text-primary" : "") + " text-xs"}>{dataFilter.length}</p>
                {title && title}
            </div>
            <Modal
                show={isFilter}
                position="center"
                onClose={() => setIsFilter(false)}
                className='!bg-black !backdrop-blur-sm h-screen !bg-opacity-70'
            >
                <Modal.Header className='!border-zinc-100'>
                    <p className="text-3xl font-black flex items-center gap-1 gn-black">Filter</p>
                </Modal.Header>
                <Modal.Body className=' text-sm bg-zinc-100 !border-zinc-100'>
                    <div className="space-y-6 text-black font-bold">
                        <div className=''>
                            <p>Gender</p>
                            <div className=" grid grid-cols-2 gap-1 items-center mt-2 font-normal overflow-x-auto">
                                <p onClick={() => dataFilter.includes("Men") ? setDataFilter(dataFilter.filter(item => item !== "Men")) : setDataFilter(e => [...e, "Men"])} className={(dataFilter.includes("Men") ? "bg-black text-white" : "text-zinc-600 bg-zinc-100 border-zinc-400 border") + " cursor-pointer py-2 px-6 text-sm rounded-xl"}>Men</p>
                                <p onClick={() => dataFilter.includes("Women") ? setDataFilter(dataFilter.filter(item => item !== "Women")) : setDataFilter(e => [...e, "Women"])} className={(dataFilter.includes("Women") ? "bg-black text-white" : "text-zinc-600 bg-zinc-100 border-zinc-400 border") + " cursor-pointer py-2 px-6 text-sm rounded-xl"}>Women</p>
                            </div>
                        </div>
                        <div className=''>
                            <div className='flex items-center gap-2'>
                                <p>Price Range</p>
                                <p className=' text-xs text-red-700 cursor-pointer'>remove</p>
                            </div>
                            <div className=" grid grid-cols-2 rounded-xl bg-zinc-100 font-normal mt-2 border border-zinc-400 p-1">
                                <input className="h-8 bg-transparent border-0 border-r-[0.5px] focus:border-0 focus:outline-none focus:ring-0 border-zinc-400" placeholder="min.." type="number" min="0" max="100000" />
                                <input className="h-8 bg-transparent border-0 border-l-[0.5px] focus:border-0 focus:outline-none focus:ring-0 border-zinc-400" placeholder="max.." type="number" min="0" max="100000" />
                            </div>
                        </div>
                        <div className=''>
                            <p>Size</p>
                            <div className="grid grid-flow-col justify-around gap-6 items-center font-black mt-2 overflow-x-auto">
                                {["S", "M", "L", "XL"].map((itemE, i) =>
                                    <p onClick={() => dataFilter.includes(itemE) ? setDataFilter(dataFilter.filter(item => item !== itemE)) : setDataFilter(e => [...e, itemE])} className={(dataFilter.includes(itemE) ? "bg-black text-white" : "text-zinc-600 bg-zinc-100 border-zinc-400 border") + " cursor-pointer p-2 h-10 w-10 rounded-full flex items-center text-center justify-center"} key={i}>{itemE}</p>
                                )}
                            </div>
                        </div>
                        <div className=''>
                            <p>Color</p>
                            <div className="grid grid-flow-col justify-around gap-6 items-center font-normal mt-2 overflow-x-auto">
                                {["#FFC700", "#FF0000", "#0019FF", "#33FF00", "#740276"].map((itemE, i) =>
                                    <p onClick={() => dataFilter.includes(itemE) ? setDataFilter(dataFilter.filter(item => item !== itemE)) : setDataFilter(e => [...e, itemE])} className={(dataFilter.includes(itemE) ? "" : "border-zinc-200 border-[6px]") + " cursor-pointer h-8 w-8 rounded-full flex items-center text-center justify-center"} key={i} style={{ "background": itemE }}></p>
                                )}
                            </div>
                        </div>
                    </div>
                </Modal.Body >
                <Modal.Footer className="grid grid-flow-col items-center justify-between !p-4 overflow-x-auto text-sm ">
                    <div onClick={() => [setIsFilter(false), setDataFilter([])]} className="hover:bg-zinc-600 duration-500 transition-colors hover:text-white cursor-pointer flex-1 bg-zinc-100 font- text-zinc-600 font-semibold px-4 py-2 rounded-full flex items-center gap-2">
                        <XMarkIcon className="h-7 w-7 p-1 rounded-full border border-zinc-600" />
                        <p>Reset all</p>
                    </div>
                    <div onClick={() => [setIsFilter(false)]} className="cursor-pointer hover:translate-x-1 transition-all duration-500 bg-black p-8 py-2 rounded-full flex items-center gap-2">
                        <p>Apply Filter</p>
                        <p className='flex items-center justify-center font-bold text-lg'>{dataFilter.length}</p>
                    </div>
                </Modal.Footer>
            </Modal >
        </>
    )
}

export default Filter