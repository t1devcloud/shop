import { HeadMeta, HeaderDesktop, AlertDesktop, CardProductRow, FooterDesktop } from '@/components'
import Link from 'next/link';
import { productData } from "../data"


function Wishlist() {
  return (
    <div className="from-white to-zinc-100 bg-gradient-to-br min-h-screen">
      <HeadMeta title="My Wishlist" />
      <AlertDesktop title="Join us at Shopsa from 12th to 9th June to see how many discounts you can get." badge="Discount 20%" action={<Link href="/login/" className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900">Register now <span aria-hidden="true">&rarr;</span></Link>} />
      <HeaderDesktop />
      <main className="text-black overflow-x-hidden mx-auto max-w-7xl grid grid-cols-3 xl:grid-cols-4 gap-2 xl:gap-4 py-4 px-2 xl:px-8">
        <div className='bg-zinc-100 rounded-xl px-4 py-6 col-span-2 xl:col-span-3 h-fit'>
          <div className=' flex items-center justify-between'>
            <p className='font-bold text-zinc-600 pb-2'>Best Product</p>
            <p className='font-bold text-zinc-600 pb-2'>4 Items</p>
          </div>
          <div className='grid grid-cols-1 gap-4'>
            {productData && productData.slice(0, 4).map((e, i) =>
              <CardProductRow key={i} data={e} />
            )}
          </div>
        </div>
        <FooterDesktop />
      </main>
    </div>
  )
}

export default Wishlist