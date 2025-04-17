import {
    ShoppingBagIcon,
    UserIcon,
    ShoppingCartIcon,
    ArrowLeftOnRectangleIcon,
    ChevronLeftIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link';
import { Tooltip, Dropdown } from 'flowbite-react';
import Router from 'next/router'
import { productData } from "../data"
import Image from 'next/image'

function HeaderDesktop({ back = true }) {

    return (
        <>
            <header className=" sticky bg-zinc-300 top-3 bg-opacity-60 backdrop-blur-sm flex items-center justify-between border-b border-zinc-300 text-black w-full mx-auto py-2 px-8 z-40 shadow-xl">
                <div className=" flex items-center gap-4">
                    {back && <><ChevronLeftIcon onClick={() => Router.back()} className="h-10 w-10 p-2 rounded-full bg-black text-white font-black cursor-pointer" /><div className="w-0.5 h-8 bg-zinc-100"></div></>}
                    <Link href="/" className="block">
                        <p className='text-3xl font-black gn-black uppercase'>Shopsa</p>
                        <p className='text-zinc-500'>Find anything what you want !</p>
                    </Link>
                </div>
                <div className="flex items-center gap-4 justify-end">
                    <Tooltip content="Cart">
                        <Link href='/cart/' className='py-2 px-6 bg-zinc-100 h-14 rounded-xl gap-1 flex items-center font-bold'>
                            <ShoppingBagIcon className='h-6 w-6' />
                            <p>Cart</p>
                        </Link>
                    </Tooltip>

                    <Tooltip content="Wishlist">
                        <Link href='/wishlist/' className='p-1.5 bg-zinc-100 rounded-xl text-xs gap-0.5 grid grid-cols-2'>
                            {productData && productData.slice(0, 3).map((e, i) =>
                                <Image
                                    key={i}
                                    width={50}
                                    height={50}
                                    className="rounded w-6 h-6"
                                    src={e.img}
                                    alt=""
                                    loading="lazy"
                                />
                            )}
                            <p className='bg-black text-white rounded text-center justify-center items-center flex'>+8</p>
                        </Link>
                    </Tooltip>
                    <Dropdown
                        inline
                        arrowIcon={false}
                        className=' bg-white bg-opacity-60 backdrop-blur-sm rounded-2xl '
                        label={
                            <div className="flex items-center gap-1 justify-between">
                                <Image
                                    width={100}
                                    height={100}
                                    className="rounded-full w-12 h-12 "
                                    src="/shop/profile.jpeg"
                                    alt=""
                                    loading="lazy"
                                />
                                <p className='font-bold'>Melikoa</p>
                            </div>
                        }
                    >
                        <Dropdown.Item className='flex items-center gap-2 font-bold' onClick={() => Router.push("/profile/")}>
                            <UserIcon className='h-6 w-6' />
                            <p>Profile</p>
                        </Dropdown.Item>
                        <Dropdown.Item className='flex items-center gap-2 font-bold' onClick={() => Router.push("/orders/")}>
                            <ShoppingCartIcon className='h-6 w-6' />
                            <p>Orders</p>
                        </Dropdown.Item>
                        <Dropdown.Item className='flex items-center gap-2 font-bold' onClick={() => Router.push("/login/")}>
                            <ArrowLeftOnRectangleIcon className='h-6 w-6' />
                            <p>Sign out</p>
                        </Dropdown.Item>
                    </Dropdown>
                </div>
            </header>
        </>
    )
}

export default HeaderDesktop