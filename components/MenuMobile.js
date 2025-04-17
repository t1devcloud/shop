import React from 'react'
import { HomeIcon, HeartIcon, ShoppingBagIcon, UserIcon, ChevronLeftIcon } from '@heroicons/react/24/outline'
import { HomeIcon as HomeIconF, HeartIcon as HeartIconF, ShoppingBagIcon as ShoppingBagIconF, UserIcon as UserIconF } from '@heroicons/react/24/solid'
import Link from 'next/link';
import Router from 'next/router'

function MenuMobile({ where }) {
    return (
        <>
            <div className="fixed bottom-2 bg-zinc-300 font-bold bg-opacity-60 backdrop-blur-sm w-11/12 -translate-x-1/2 left-1/2 py-2 px-6 rounded-xl flex justify-between items-center z-40">
                <Link href="/" className=' flex flex-col items-center justify-center space-y-0.5 hover:-translate-y-1 transition-all'>
                    {where === "Home" ?
                        <HomeIconF className="h-6 w-6" />
                        :
                        <HomeIcon className="h-6 w-6" />
                    }
                    <p>Home</p>
                </Link>
                <Link href="/wishlist" className=' flex flex-col items-center justify-center space-y-0.5 hover:-translate-y-1 transition-all'>
                    {where === "Wishlist" ?
                        <HeartIconF className="h-6 w-6" />
                        :
                        <HeartIcon className="h-6 w-6" />
                    }
                    <p>Wishlist</p>
                </Link>
                <Link href="/cart" className=' flex flex-col items-center justify-center space-y-0.5 hover:-translate-y-1 transition-all'>
                    {where === "Cart" ?
                        <ShoppingBagIconF className="h-6 w-6" />
                        :
                        <ShoppingBagIcon className="h-6 w-6" />
                    }
                    <p>Cart</p>
                </Link>
                <Link href="/profile" className=' flex flex-col items-center justify-center space-y-0.5 hover:-translate-y-1 transition-all'>
                    {where === "Profile" ?
                        <UserIconF className="h-6 w-6" />
                        :
                        <UserIcon className="h-6 w-6" />
                    }
                    <p>Profile</p>
                </Link>
            </div>
        </>
    )
}

export default MenuMobile