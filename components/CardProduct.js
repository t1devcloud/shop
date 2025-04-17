import { useState } from 'react'
import { HeartIcon as Like } from '@heroicons/react/24/solid'
import { HeartIcon, TruckIcon } from '@heroicons/react/24/outline'
import Link from 'next/link';
import Image from 'next/image'


function CardProduct({ data }) {
    const [favorite, setFavorite] = useState(false)
    return (
        <div className="relative">
            <div className="absolute left-2 top-5 space-y-1">
                {data.previousPrice && <div className="w-fit bg-orange-500 text-white font-bold rounded-r-lg py-1 px-1.5 text-sm font-blck">{data.discount}</div>}
                {data.freeShipping && <div className="w-fit bg-green-500 text-white font-bold rounded-r-lg py-1 px-1.5 text-sm font-blck"><TruckIcon className="h-5 w-5" /></div>}
            </div>
            <div onClick={() => favorite ? setFavorite(false) : setFavorite(true)} className="absolute bg-zinc-300 bg-opacity-40 text-white backdrop-blur rounded-full p-0.5 right-4 top-5 items-center justify-center flex text-center h-8 w-8 cursor-pointer">
                {
                    favorite ?
                        <Like className="h-6 w-6 text-red-600" />
                        :
                        <HeartIcon className="h-6 w-6" />
                }
            </div>
            <Link href={"/product/" + data?.link} className="flex flex-col space-y-1 hover:bg-zinc-100 p-2 rounded-xl">
                <Image
                    width={500}
                    height={500}
                    className="rounded-xl w-40 h-40 lg:w-48 xl:w-52 lg:h-48 xl:h-52"
                    src={data?.img}
                    alt={data?.title + " | "}
                    loading="lazy"
                />
                <p className='font-black truncate w-40 lg:w-48 xl:w-52'>{data.title}</p>
                <div className=" flex items-center justify-between">
                    {data.previousPrice && <p className='line-through text-zinc-400'>{data.previousPrice}</p>}
                    <p className='font-black'>{data.price}</p>

                </div>
                <button className='w-full bg-black p-2 rounded-full text-center text-white lg:flex items-center justify-center font-bold hidden'>Buy</button>
            </Link>
        </div>
    )
}

export default CardProduct