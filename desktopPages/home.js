import { useState } from 'react'
import Image from 'next/image'
import { ShoppingBagIcon, MagnifyingGlassIcon, QrCodeIcon, UserIcon, ShoppingCartIcon, ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline'
import { dataDsiplay, categoryData, productData, dataSquareDsiplay, dataRectangleDsiplay, dataAds } from "../data"
import { DisplayBoard, FilterSort, CardProduct, HeadMeta, FooterDesktop } from '@/components'
import Link from 'next/link';
import { Tooltip, Dropdown } from 'flowbite-react';
import Router from 'next/router'

export default function Home() {

  return (
    <div className="from-white to-zinc-100 bg-gradient-to-br min-h-screen">
      {/* <HeadMeta title="Home" /> */}
      <main className="text-black overflow-x-hidden space-y-5 mx-auto max-w-[1536px] pb-4">

        {/* Header */}
        <div className="flex items-center gap-1 justify-between px-4 xl:px-8 pt-4">
          <div className="flex items-center gap-4 justify-start w-2/5">
            <p className='font-bold text-2xl border-r pr-4 border-zinc-400'>37</p>
            <div>
              <p>Orders</p>
              <p className="text-zinc-400 text-sm">Last 7 days</p>
            </div>
          </div>
          <Link href="/" className='flex-1 text-center w-1/5'>
            <p className='text-3xl font-black gn-black uppercase'>Shopsa</p>
            <p className='text-zinc-500'>Find anything what you want !</p>
          </Link>
          <div className="flex items-center gap-4 justify-end w-2/5">
            <Tooltip content="Cart">
              <Link href='/cart/' className='py-2 px-6 bg-zinc-200 h-14 rounded-xl gap-1 flex items-center'>
                <ShoppingBagIcon className='h-6 w-6' />
                <p>Cart</p>
              </Link>
            </Tooltip>

            <Tooltip content="Wishlist">
              <Link href='/wishlist/' className='p-1.5 bg-zinc-200 rounded-xl text-xs gap-0.5 grid grid-cols-2'>
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
                <p className='bg-white rounded text-center justify-center items-center flex'>+8</p>
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
        </div>

        {/* Explore */}
        <div className="flex items-center gap-1 justify-between px-4 xl:px-8 pb-4 border-b border-zinc-300">
          <p className='text-2xl font-extrabold gn-black w-1/5'>Category</p>
          <div className='grid grid-flow-col gap-1 overflow-x-auto w-3/5'>
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
          <div className='flex items-center gap-4 w-1/5 justify-end'>
            <div className='flex items-center gap-4'>
              <Link href="/p/" className="rounded-full p-1 hover:text-white hover:bg-primary hover:-translate-y-1 transition-all">
                <MagnifyingGlassIcon className="h-6 w-6" />
              </Link>
              <Link href="/qr-reder/" className="rounded-full p-1 hover:text-white hover:bg-primary hover:-translate-y-1 transition-all">
                <QrCodeIcon className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>

        {/* Banners */}
        <div className='grid grid-cols-2 gap-4 px-4 xl:px-8'>
          <div className=' space-y-4'>
            <DisplayBoard data={dataDsiplay} css="bg-zinc-100 rounded-[3rem] overflow-hidden h-[17rem] xl:h-[20rem]" />
            <div className='grid grid-cols-2 gap-4'>
              <div className='bg-zinc-100 rounded-[3rem] overflow-hidden xl:h-[20rem] xl:w-[20rem]'>
                <Image
                  width={500}
                  height={500}
                  className="h-full w-full"
                  src={dataSquareDsiplay[0].img}
                  alt=""
                  loading="lazy"
                />
              </div>
              <div className='bg-zinc-100 rounded-[3rem] overflow-hidden xl:h-[20rem] xl:w-[20rem]'>
                <Image
                  width={500}
                  height={500}
                  className="h-full w-full"
                  src={dataSquareDsiplay[1].img}
                  alt=""
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className='flex items-center justify-between gap-4'>
            <div className='bg-zinc-100 rounded-[3rem] overflow-hidden h-full xl:w-[20rem]'>
              <Image
                width={500}
                height={500}
                className="h-full w-full"
                src={dataRectangleDsiplay[0].img}
                alt=""
                loading="lazy"
              />
            </div>
            <div className='bg-zinc-100 rounded-[3rem] overflow-hidden h-full xl:w-[20rem]'>
              <Image
                width={500}
                height={500}
                className="h-full w-full"
                src={dataRectangleDsiplay[1].img}
                alt=""
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Products */}
        <div className='flex px-4 xl:px-8 gap-4'>
          <div className='w-3/4 bg-zinc-300 rounded-3xl h-fit'>
            <div className='bg-zinc-200 rounded-t-3xl w-full h-14 flex items-center justify-between px-4 xl:px-8'>
              <p className='text-2xl font-extrabold gn-black'>Discover</p>
              <FilterSort />
            </div>
            <div className='grid grid-cols-3 xl:grid-cols-4 gap-2 xl:gap-4 p-4'>
              {productData && productData.map((e, i) =>
                <div key={i} className=' flex items-center justify-center'>
                  <CardProduct data={e} />
                </div>
              )}
            </div>
          </div>
          <div className='w-1/4 space-y-4'>
            {/* <div className='w-full rounded-3xl p-4 bg-zinc-200'>
              <p className=' text-2xl font-black gn-black'>About Us</p>
              <p className=' text-zinc-500 mt-2'>Shopping for shoes is a popular activity enjoyed by many people around the world. Whether you're looking for casual sneakers, elegant heels, comfortable sandals, or sturdy boots, there is a wide variety of shoes available to suit different tastes, occasions, and lifestyles.</p>
            </div> */}
            <FooterDesktop />
          </div>
        </div>

      </main>
    </div>
  )
}
