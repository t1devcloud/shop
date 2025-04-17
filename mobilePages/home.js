import Image from 'next/image'
import { MagnifyingGlassIcon, QrCodeIcon } from '@heroicons/react/24/solid'
import { DisplayBoard, CardProduct, MenuMobile, FilterSort, HeadMeta } from '@/components'
import Link from 'next/link';
import { dataDsiplay, categoryData, productData } from "../data"


export default function Home() {

  return (
    <>
      {/* <HeadMeta title="Home" /> */}

      <main className="from-white to-zinc-100 bg-gradient-to-br min-h-screen text-black p-4 overflow-x-hidden space-y-2 pb-20">
        <div className="flex items-center justify-between">
          <div className=''>
            <p className='text-3xl font-black flex  gn-black uppercase'>Shopsa</p>
            <p className='text-zinc-500'>Find anything what you want !</p>
          </div>
          <div className='flex items-center gap-4'>
            <Link href="/p/" className="rounded-full p-1 hover:text-white hover:bg-primary hover:-translate-y-1 transition-all">
              <MagnifyingGlassIcon className="h-6 w-6" />
            </Link>
            <Link href="/qr-reder/" className="rounded-full p-1 hover:text-white hover:bg-primary hover:-translate-y-1 transition-all">
              <QrCodeIcon className="h-6 w-6" />
            </Link>
          </div>
        </div>

        <DisplayBoard data={dataDsiplay} />

        <div className='space-y-2'>
          <div className="flex items-center justify-between">
            <p className='text-2xl font-extrabold gn-black'>Category</p>
            <Link href="/p/" className='text-xs font-bold border border-black px-2 py-0.5 rounded-full bg-black bg-opacity-5'>More</Link>
          </div>
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

        <div className='space-y-2 border-t pt-4 border-zinc-100 bg-zinc-100 -mx-4 px-4'>
          <div className="flex items-center justify-between">
            <p className='text-2xl font-extrabold gn-black'>Discover</p>
            <FilterSort />
          </div>
          <div className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
            {productData && productData.map((e, i) =>
              <div key={i} className=' flex items-center justify-center'>
                <CardProduct data={e} />
              </div>
            )}
          </div>
        </div>

        <MenuMobile where={"Home"} />


      </main >
    </>
  )
}
