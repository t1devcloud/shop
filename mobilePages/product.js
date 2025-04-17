import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { HeartIcon as Like } from '@heroicons/react/24/solid'
import { HeartIcon, ChevronLeftIcon, ChevronRightIcon, TruckIcon, TagIcon, CreditCardIcon, ArrowPathRoundedSquareIcon } from '@heroicons/react/24/outline'
import Link from 'next/link';
import Router from 'next/router'
import { CardProduct, HeadMeta, Comment } from '@/components'
import { Carousel, Rating } from 'flowbite-react';
import { productData } from "../data"
import Image from 'next/image'


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

    useEffect(() => {
        const carousel = document.querySelectorAll('[data-testid="carousel"]')[0];
        carousel.children[0].style = "border-radius: 0;";
    }, []);

    return (
        <>
            <HeadMeta title={dataPo ? dataPo.title : "Product"} />
            <main className="bg-white min-h-screen text-black overflow-x-hidden space-y-2">
                <div className="flex flex-col bg-zinc-100 h-80 w-full">
                    <div className='flex items-center justify-between absolute top-4 px-4 z-10 w-full'>
                        <div onClick={() => Router.back()} className="bg-zinc-300 bg-opacity-60 backdrop-blur text-zinc-600 p-2 rounded-full cursor-pointer">
                            <ChevronLeftIcon className="h-6 w-6" />
                        </div>

                        <p className="bg-white bg-opacity-5 backdrop-blur py-1 px-2 rounded-xl text-white font-bold">Order Details</p>

                        <div onClick={() => favorite ? setFavorite(false) : setFavorite(true)} className="bg-zinc-300 bg-opacity-20 text-white backdrop-blur rounded-full p-2 items-center justify-center flex text-center cursor-pointer">
                            {
                                favorite ?
                                    <Like className="h-6 w-6 text-red-600" />
                                    :
                                    <HeartIcon className="h-6 w-6" />
                            }
                        </div>
                    </div>
                    <Carousel
                        leftControl={<div className=' hidden group-hover:flex text-white'><ChevronLeftIcon className="h-6 w-6" /></div>}
                        rightControl={<div className=' hidden group-hover:flex text-white'><ChevronRightIcon className="h-6 w-6" /></div>}
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
                <div className="space-y-3 px-4 pt-1">
                    <div className=" flex items-center justify-between">
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
                        <div className=' flex items-center gap-1'>
                            {dataPo?.discount !== "" && <div className="bg-orange-500 text-white font-bold rounded-lg py-1 px-1.5 text-sm font-blck">{dataPo?.discount}</div>}
                            {dataPo?.freeShipping && <div className="bg-green-500 text-white font-bold rounded-lg py-1 px-1.5 text-sm flex items-center gap-1"><TruckIcon className="h-5 w-5" />Free shipping</div>}
                        </div>
                    </div>
                    <div>
                        <h1 className=' text-3xl font-black'>{dataPo?.title}</h1>
                        <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has {!isReadMore ? <span onClick={() => setIsReadMore(!isReadMore)} className='text-xs font-bold cursor-pointer'>Read more...</span> : <>been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. <span onClick={() => setIsReadMore(!isReadMore)} className='text-xs font-bold text-red-600 cursor-pointer'>close</span></>}</h2>
                    </div>
                    <hr />
                    <div>
                        <p className={(errorAddCard ? "text-red-600 text-base font-black" : "font-bold text-sm")}>Choose Size</p>
                        <div className="grid grid-flow-col justify-around gap-6 items-center font-normal mt-2 overflow-x-auto">
                            {["S", "M", "L", "XL"].map((itemE, i) =>
                                <p onClick={() => setDataProduct({ ...dataProduct, ["size"]: itemE })} className={(dataProduct.size == itemE ? "bg-black text-white" : "text-zinc-600 bg-zinc-300") + " cursor-pointer p-2 h-10 w-10 rounded-full flex items-center text-center justify-center"} key={i}>{itemE}</p>
                            )}
                        </div>
                    </div>
                    <div className=' flex items-center justify-between'>
                        <div>
                            <p className={(errorAddCard ? "text-red-600 text-base font-black" : "font-bold text-sm")}>Color</p>
                            <div className=' flex items-center justify-between'>
                                <div className="grid grid-flow-col gap-2 items-center font-normal mt-2 overflow-x-auto">
                                    {["#FFC700", "#FF0000"].map((itemE, i) =>
                                        <p onClick={() => setDataProduct({ ...dataProduct, ["color"]: itemE })} className={(dataProduct.color == itemE ? " border-2 border-zinc-600 shadow-sm border-dashed" : "") + " cursor-pointer h-6 w-6 rounded-full flex items-center text-center justify-center"} key={i} style={{ "background": itemE }}></p>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className=' text-sm font-bold'>Number</p>
                            <div className=' grid grid-flow-col items-center gap-2 bg-zinc-300 p-1 rounded-full'>
                                <div onClick={() => setDataProduct({ ...dataProduct, ["number"]: 1 < dataProduct.number ? dataProduct.number - 1 : 1 })} className='cursor-pointer w-8 text-center text-xl font-black rounded-full'>-</div>
                                <p className='text-sm p-1'>{dataProduct.number}</p>
                                <div onClick={() => setDataProduct({ ...dataProduct, ["number"]: dataProduct.number < 10 ? dataProduct.number + 1 : 10 })} className='cursor-pointer w-8 text-center text-xl font-black bg-black text-white rounded-full'>+</div>
                            </div>
                        </div>
                    </div>

                    <hr />
                </div>

                <div className="px-4 py-2 grid grid-cols-2 gap-6 text-sm">
                    <div className=' flex items-center gap-1'>
                        < CreditCardIcon className="h-7 w-7 bg-zinc-300 rounded-full p-1 text-center" />
                        <p>Secure payment</p>
                    </div>
                    <div className=' flex items-center gap-1'>
                        <TagIcon className="h-7 w-7 bg-zinc-300 rounded-full p-1 text-center" />
                        <p>Size & Fit</p>
                    </div>
                    <div className=' flex items-center gap-1'>
                        <TruckIcon className="h-7 w-7 bg-zinc-300 rounded-full p-1 text-center" />
                        <p>Free shipping</p>
                    </div>
                    <div className=' flex items-center gap-1'>
                        <ArrowPathRoundedSquareIcon className="h-7 w-7 bg-zinc-300 rounded-full p-1 text-center" />
                        <p>Free shipping & Returns</p>
                    </div>
                </div>

                <hr />
                <div className="px-4 py-2">
                    <div className=' flex items-center justify-between'>
                        <p className=" font-bold">Offers</p>
                    </div>
                    <div className='flex flex-row overflow-x-auto sm:grid-cols-3 gap-2 mt-4'>
                        {productData && productData.map((e, i) =>
                            <div key={i} className=' flex items-center justify-center'>
                                <CardProduct data={e} />
                            </div>
                        )}
                    </div>
                </div>

                <Comment />

                <div className=" fixed bottom-0 w-full bg-zinc-300 bg-opacity-60 backdrop-blur text-zinc-600 shadow-xl p-3 rounded-t-3xl flex items-center justify-between">
                    <div>
                        {dataPo?.discount !== "" && <p className='line-through text-zinc-700'>{dataPo?.previousPrice}</p>}
                        <div className=' flex items-center gap-1 text-zinc-900'>
                            <p className='flex items-center text-sm'>{dataProduct.number} * {dataPo?.price}</p>
                            <p className='font-black text-lg'>${dataProduct.number * parseFloat(dataPo?.price.replace("$", ""))}</p>
                        </div>
                    </div>
                    {dataProduct.color !== "" && dataProduct.size !== "" ?
                        <Link href="/cart" className={'bg-black text-white rounded-full py-2 px-6'}>
                            <p>Add Cart </p>
                        </Link>
                        :
                        <div onClick={() => setErrorAddCard(true)} className={'bg-zinc-600 text-white rounded-full py-2 px-6'}>
                            <p>Add Cart </p>
                        </div>
                    }
                </div>
            </main >
        </>
    )
}

export default Product