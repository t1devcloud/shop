import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { HeartIcon as Like, HomeIcon } from '@heroicons/react/24/solid'
import { HeartIcon, ChevronLeftIcon, ChevronRightIcon, TruckIcon, TagIcon, CreditCardIcon, ArrowPathRoundedSquareIcon, ChatBubbleLeftEllipsisIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'
import Link from 'next/link';
import Router from 'next/router'
import { FilterPayment, CardProduct, FilterSort, Comment, HeadMeta, HeaderDesktop, AlertDesktop, FooterDesktop } from '@/components'
import { Carousel, Rating, Breadcrumb } from 'flowbite-react';
import Image from 'next/image'
import { productData } from "../data"


function Product() {

    const router = useRouter()

    const [dataPo, setDataPo] = useState()
    useEffect(() => {
        setDataPo(productData.find(e => e.id === router.query.product))
    }, [router.query]);

    const [favorite, setFavorite] = useState(false)
    const [isReadMore, setIsReadMore] = useState(false)
    const [errorAddCard, setErrorAddCard] = useState(false)

    const [dataProduct, setDataProduct] = useState({
        size: "",
        color: "",
        number: 1
    })



    return (
        <div className="from-white to-zinc-100 bg-gradient-to-br min-h-screen">
            <HeadMeta title={dataPo ? dataPo.title : "Product"} />

            <AlertDesktop title="Join us at Shopsa from 12th to 9th June to see how many discounts you can get." badge="Discount 20%" action={<Link href="/login/" className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900">Register now <span aria-hidden="true">&rarr;</span></Link>} />
            <HeaderDesktop />
            <main className="text-black overflow-x-hidden mx-auto max-w-7xl pb-4 pt-6">
                <div className="grid grid-cols-2 p-4 xl:px-8">
                    <div className="flex items-center justify-center">
                        <div className="h-[35rem] w-[35rem]">
                            <Carousel
                                leftControl={<div className=' hidden group-hover:flex text-white p-2 bg-black rounded-full font-bold bg-opacity-30 backdrop-blur-sm'><ChevronLeftIcon className="h-10 w-10" /></div>}
                                rightControl={<div className=' hidden group-hover:flex text-white p-2 bg-black rounded-full font-bold bg-opacity-30 backdrop-blur-sm'><ChevronRightIcon className="h-10 w-10" /></div>}
                                className='group'
                                slide={false}
                            >
                                {dataPo?.imgs.map((e, i) =>
                                    <Image
                                        key={i}
                                        width={500}
                                        height={500}
                                        className=''
                                        alt={dataPo?.title}
                                        src={e}
                                        loading="lazy"
                                    />

                                )}
                            </Carousel>
                        </div>
                    </div>
                    <div className="flex flex-col p-4 space-y-4">
                        <div className=' flex items-center justify-between'>
                            <Breadcrumb aria-label="Default breadcrumb Shop">
                                <Breadcrumb.Item
                                    href="/"
                                    icon={HomeIcon}
                                >
                                    <p>
                                        Home
                                    </p>
                                </Breadcrumb.Item>
                                <Breadcrumb.Item href="/p/">
                                    Shop
                                </Breadcrumb.Item>
                                <Breadcrumb.Item>
                                    Shoes
                                </Breadcrumb.Item>
                            </Breadcrumb>
                            <div onClick={() => favorite ? setFavorite(false) : setFavorite(true)} className="bg-zinc-300 text-white rounded-full p-2 items-center justify-center flex text-center cursor-pointer">
                                {
                                    favorite ?
                                        <Like className="h-6 w-6 text-red-600" />
                                        :
                                        <HeartIcon className="h-6 w-6" />
                                }
                            </div>
                        </div>
                        <div>
                            <h1 className="font-bold gn-black text-2xl">{dataPo?.title}</h1>
                            <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has {!isReadMore ? <span onClick={() => setIsReadMore(!isReadMore)} className='text-xs font-bold cursor-pointer'>Read more...</span> : <>been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. <span onClick={() => setIsReadMore(!isReadMore)} className='text-xs font-bold text-red-600 cursor-pointer'>close</span></>}</h2>
                        </div>

                        <div className=" flex items-cneter justify-between text-zinc-500">
                            <div className=''>
                                <Rating>
                                    <Rating.Star />
                                    <Rating.Star />
                                    <Rating.Star />
                                    <Rating.Star />
                                    <Rating.Star />
                                </Rating>
                                <p className='text-xs'>5.0 (7.932 reviews)</p>
                            </div>
                            <div className=' flex items-start gap-1'>
                                <Link href="#comment" className='flex items-center gap-2 hover:bg-zinc-200 p-2 rounded-xl'>
                                    <ChatBubbleLeftEllipsisIcon className="h-5 w-5" />
                                    <p>20 comment</p>
                                </Link>
                                {dataPo?.discount !== "" && <div className="bg-orange-500 text-white font-bold rounded-lg py-2 px-3 text-sm">{dataPo?.discount}</div>}
                                {dataPo?.freeShipping && <div className="bg-green-500 text-white font-bold rounded-lg py-2 px-3 text-sm flex items-center gap-1"><TruckIcon className="h-5 w-5" />Free shipping</div>}
                            </div>
                        </div>

                        <div className=' space-y-1'>
                            <p className={(errorAddCard ? "text-red-600 text-base font-black" : "font-bold text-base")}>Choose Size</p>
                            <div className="flex gap-6 items-center font-normal mt-2 overflow-x-auto">
                                {["S", "M", "L", "XL"].map((itemE, i) =>
                                    <p onClick={() => setDataProduct({ ...dataProduct, ["size"]: itemE })} className={(dataProduct.size == itemE ? "bg-black text-white" : "text-zinc-600 bg-zinc-300") + " cursor-pointer p-2 h-10 w-10 rounded-full flex items-center text-center justify-center"} key={i}>{itemE}</p>
                                )}
                            </div>
                        </div>
                        <div className=' flex items-center justify-between'>
                            <div className=' space-y-1'>
                                <p className={(errorAddCard ? "text-red-600 text-base font-black" : "font-bold text-base")}>Choose Color</p>
                                <div className=' flex items-center justify-between'>
                                    <div className="flex gap-2 items-center font-normal mt-2 overflow-x-auto">
                                        {["#FFC700", "#FF0000"].map((itemE, i) =>
                                            <p onClick={() => setDataProduct({ ...dataProduct, ["color"]: itemE })} className={(dataProduct.color == itemE ? " border-2 border-zinc-600 shadow-sm border-dashed" : "") + " cursor-pointer h-6 w-6 rounded-full flex items-center text-center justify-center"} key={i} style={{ "background": itemE }}></p>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className=' space-y-1'>
                                <p className=' text-base font-bold'>Number</p>
                                <div className=' grid grid-flow-col items-center gap-2 bg-zinc-300 p-1 rounded-full'>
                                    <div onClick={() => setDataProduct({ ...dataProduct, ["number"]: 1 < dataProduct.number ? dataProduct.number - 1 : 1 })} className='cursor-pointer w-8 text-center text-xl font-black rounded-full'>-</div>
                                    <p className='text-base p-1'>{dataProduct.number}</p>
                                    <div onClick={() => setDataProduct({ ...dataProduct, ["number"]: dataProduct.number < 10 ? dataProduct.number + 1 : 10 })} className='cursor-pointer w-8 text-center text-xl font-black bg-black text-white rounded-full'>+</div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full text-zinc-600 flex items-center justify-between">
                            {dataProduct.color !== "" && dataProduct.size !== "" ?
                                <Link href="/cart" className={'bg-black text-white rounded-full py-4 font-bold px-10 flex items-center gap-2'}>
                                    <ShoppingCartIcon className='h-5 w-w' />
                                    <p>Add Cart </p>
                                </Link>
                                :
                                <div onClick={() => setErrorAddCard(true)} className={'bg-black text-white rounded-full py-4 font-bold px-10 flex items-center gap-2'}>
                                    <ShoppingCartIcon className='h-5 w-w' />
                                    <p>Add Cart </p>
                                </div>
                            }
                            <div>
                                {dataPo?.discount !== "" && <p className='line-through text-zinc-700'>{dataPo?.previousPrice}</p>}
                                <div className=' flex items-center gap-1 text-zinc-900'>
                                    <p className='flex items-center text-sm'>{dataProduct.number} * {dataPo?.price}</p>
                                    <p className='font-black text-lg'>${dataProduct.number * parseFloat(dataPo?.price.replace("$", ""))}</p>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="px-4 py-2 grid grid-cols-2 gap-6 text-sm">
                            <div className=' flex items-center gap-1'>
                                < CreditCardIcon className="h-10 w-10 bg-zinc-200 rounded-full p-2 text-center" />
                                <p>Secure payment</p>
                            </div>
                            <div className=' flex items-center gap-1'>
                                <TagIcon className="h-10 w-10 bg-zinc-200 rounded-full p-2 text-center" />
                                <p>Size & Fit</p>
                            </div>
                            <div className=' flex items-center gap-1'>
                                <TruckIcon className="h-10 w-10 bg-zinc-200 rounded-full p-2 text-center" />
                                <p>Free shipping</p>
                            </div>
                            <div className=' flex items-center gap-1'>
                                <ArrowPathRoundedSquareIcon className="h-10 w-10 bg-zinc-200 rounded-full p-2 text-center" />
                                <p>Free shipping & Returns</p>
                            </div>
                        </div>
                    </div>
                </div>

                <hr />

                <div className="p-4 xl:p-8">
                    <div className=' flex items-center justify-between'>
                        <p className=" font-bold text-2xl gn-black">Similar Products</p>
                    </div>
                    <div className='flex flex-row overflow-x-auto sm:grid-cols-3 gap-2 mt-4'>
                        {productData && productData.map((e, i) =>
                            <div key={i} className=' flex items-center justify-center'>
                                <CardProduct data={e} />
                            </div>
                        )}
                    </div>
                </div>

                <hr />

                <div className="flex p-4 xl:p-8">
                    <div className='w-2/3'>
                        <Comment />
                    </div>
                    <div className='w-1/3'>
                        <FooterDesktop />
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Product