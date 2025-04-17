import { useState } from 'react'
import { HeartIcon as Like } from '@heroicons/react/24/solid'
import { HeartIcon, TruckIcon } from '@heroicons/react/24/outline'
import Link from 'next/link';
import Image from 'next/image'

function CardProductRow({ data }) {
    const [favorite, setFavorite] = useState(false)


    return (
        <div className='flex bg-zinc-100 rounded-xl relative shadow-xl'>
            <div className="relative">
                <div className="absolute left-0 top-5 space-y-1">
                    {data.previousPrice && <div className="w-fit bg-orange-500 text-white font-bold rounded-r-lg py-1 px-1.5 text-sm font-blck">{data.discount}</div>}
                    {data.freeShipping && <div className="w-fit bg-green-500 text-white font-bold rounded-r-lg py-1 px-1.5 text-sm font-blck"><TruckIcon className="h-5 w-5" /></div>}
                </div>
                <Image
                    width={500}
                    height={500}
                    className="rounded-xl w-28 h-28"
                    src={data?.img}
                    alt={data?.title + " | "}
                    loading="lazy"
                />
            </div>
            <div className="flex-1 p-4 flex flex-col justify-between">
                <div className=" flex items-center justify-between">
                    <Link href={"/product/" + data?.link} className='font-black truncate w-24 sm:w-32'>{data.title}</Link>
                    <div onClick={() => favorite ? setFavorite(false) : setFavorite(true)} className="bg-zinc-300 bg-opacity-40 text-white backdrop-blur rounded-full items-center justify-center flex text-center h-8 w-8 cursor-pointer">
                        {
                            !favorite ?
                                <Like className="h-6 w-6 text-red-600" />
                                :
                                <HeartIcon className="h-6 w-6" />
                        }
                    </div>
                </div>
                <div className=" flex items-center justify-between">
                    {data.previousPrice && <p className='line-through text-zinc-400'>{data.previousPrice}</p>}
                    <p className='font-black'>{data.price}</p>
                </div>
            </div>
        </div>
    )
}

export default CardProductRow