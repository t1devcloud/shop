import { useState } from 'react'
import { HeartIcon as Like, TrashIcon } from '@heroicons/react/24/solid'
import { HeartIcon, TruckIcon } from '@heroicons/react/24/outline'
import Link from 'next/link';
import Image from 'next/image'

function MyCartProduct({ data }) {
    const [favorite, setFavorite] = useState(false)
    return (
        <div className=" flex justify-between items-center gap-3 border-2 py-2 px-4 border-zinc-200 rounded-3xl bg-zinc-50">
            <input defaultChecked={true} type="checkbox" className="appearance-none checked:bg-black rounded focus:ring-black" />
            <Image
                width={500}
                height={500}
                className="rounded-xl w-24 h-24"
                src={data?.img}
                alt={data?.title + " | "}
                loading="lazy"
            />
            <div className=' flex-1 space-y-1'>
                <div className=" flex flex-row items-center justify-between">
                    <Link href={"/product/" + data?.link} className='font-black truncate w-24 text-sm lg:text-base sm:w-32 lg:w-60'>{data.title}</Link>
                    <div onClick={() => favorite ? setFavorite(false) : setFavorite(true)} className="bg-zinc-300 text-white backdrop-blur rounded-full items-center justify-center flex text-center h-8 w-8 cursor-pointer">
                        {
                            favorite ?
                                <Like className="h-5 w-5 text-red-600" />
                                :
                                <HeartIcon className="h-5 w-5" />
                        }
                    </div>
                </div>
                <div className=" flex items-center gap-2 text-sm">
                    {data.previousPrice && <p className='line-through text-zinc-400'>{data.previousPrice}</p>}
                    <p className='font-black'>{data.price}</p>
                </div>
                <div className=" flex justify-between items-center">
                    <div className=' grid grid-flow-col items-center gap-1 '>
                        <div onClick={() => []} className='cursor-pointer w-8 text-center font-black rounded-full'>-</div>
                        <p className='text-sm p-1'>1</p>
                        <div onClick={() => []} className='cursor-pointer w-8 text-center font-black bg-black text-white rounded-full'>+</div>
                    </div>
                    <TrashIcon className='h-5 w-5 text-red-500' />
                </div>
            </div>
        </div>
    )
}

export default MyCartProduct