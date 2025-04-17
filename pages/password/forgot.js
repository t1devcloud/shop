import { useState, useEffect } from 'react';
import Link from 'next/link'
import { EnvelopeIcon } from '@heroicons/react/24/solid'
import { ArrowSmallLeftIcon } from '@heroicons/react/24/outline'
import { categoryData } from "../../data"
import { HeadMeta } from '@/components'

function Forget() {

    const [loading, setLoading] = useState(false)

    const [err, setErr] = useState(null)
    const handleSubmit = async (e) => {
        e.preventDefault();
        const credentials = {
            email: e.target.email.value,
        }
        setLoading(true)
        const data = await passwordReset(credentials)
        setLoading(false)
        setErr(data["detail"])
    }




    return (
        <div>
            <HeadMeta title="Forget your password" />
            <div className="min-h-screen flex items-center justify-center">
                <div className="bg-cover bg-no-repeat bg-center blur-3xl absolute h-screen w-full" style={{ backgroundImage: `url('${categoryData[0].img}')` }}></div>

                <div className='mx-2 w-full sm:w-5/6 lg:h-[26rem] sm:mx-auto rounded-xl shadow-xl lg:flex lg:overflow-hidden bg-primary bg-opacity-10 backdrop-blur'>

                    <div className="hidden lg:flex lg:w-3/6 h-full items-end justify-center bg-cover bg-no-repeat" style={{ backgroundImage: `url('${categoryData[0].img}')` }}>
                        <div className="bg-primary backdrop-blur bg-opacity-50 rounded-lg text-white py-2 px-10 flex items-center gap-2 text-sm mb-2">
                            <p className=" text-gray-200 text-xs">Design by</p>
                            <Link href="/" className="font-bold hover:text-primary">Your Company</Link>
                        </div>
                    </div>

                    <div className='lg:w-4/6 h-full p-4 text-white'>
                        <form className='flex flex-col justify-between h-full space-y-4' method="POST" onSubmit={handleSubmit}>

                            <div className='flex flex-row justify-between items-center'>
                                <div className='flex items-center justify-between md:gap-10 bg-primary bg-opacity-20 rounded-lg py-1 px-3'>
                                    <Link href='/login' className='flex justify-center items-center font-semibold'>
                                        <ArrowSmallLeftIcon className='h-5 w-5 mr-1 font-bold' />
                                        <p>Back</p>
                                    </Link>
                                </div>

                                <Link href="/" className=''>
                                    <div className='flex flex-col items-center justify-center'>
                                        <p className='text-3xl font-black flex  gn-black uppercase'>Shopsa</p>
                                        <p className='text-zinc-500'>Find anything what you want !</p>
                                    </div>
                                </Link>
                            </div>

                            <div className=" space-y-3">
                                <div className='text-primary'>
                                    <p className='font-extralight lg:font-bold'>Forget your password</p>
                                </div>

                                <div className={`${false ? 'bg-red-300' : 'bg-primary-800'} flex pl-3 rounded-lg items-center text-gray-200 shadow-sm`}>
                                    <EnvelopeIcon className="h-5 w-5 mr-2 text-gray-200" />
                                    <div className="relative w-full">
                                        <input required name="email" type="email" placeholder=" " id="email" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded-lg border-1 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer" />
                                        <label htmlFor="email" className="absolute text-sm text-gray-200 bg-primary-800 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-gray-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Email</label>
                                    </div>
                                </div>

                                {err &&
                                    <div className='justify-center flex text-red-500'>
                                        <p className=''>{err}</p>
                                    </div>
                                }
                            </div>

                            <div className='justify-center flex'>
                                {!err ?
                                    <>{loading ?
                                        <div className='bg-primary mx-2 px-12 py-2 rounded-lg font-bold text-white w-full text-center'>
                                            Wait . . .
                                        </div>
                                        :
                                        <button type='submit' className='bg-primary mx-2 px-12 py-2 rounded-lg font-bold text-white w-full text-center transition-all hover:-translate-y-1 hover:bg-primary'>
                                            Send
                                        </button>
                                    }</>
                                    :
                                    <Link href="/login" className='bg-primary mx-2 px-12 py-2 rounded-lg font-bold text-white w-full text-center transition-all hover:-translate-y-1 hover:bg-primary'>
                                        Login
                                    </Link>
                                }
                            </div>

                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Forget;