import { useState, useEffect } from 'react';
import Link from 'next/link'
import { LockClosedIcon, UserIcon } from '@heroicons/react/24/solid'
import { categoryData } from "../data"
import { HeadMeta } from '@/components'
import Image from 'next/image'


function Login({ providers }) {
    const [loading, setLoading] = useState(false)
    const [dataUser, setDataUser] = useState()
    const [check, setCheck] = useState(false)

    const [err, setErr] = useState(null)
    const handleSubmit = async (e) => {
        e.preventDefault();
    }
    useEffect(() => {
        if (dataUser) {
            setLoading(true)
        }
    }, [dataUser]);


    return (
        <div>
            <HeadMeta title="Login" />
            <div className="min-h-screen flex items-center justify-center">
                <div className="bg-cover bg-no-repeat bg-center blur-3xl absolute h-screen w-full" style={{ backgroundImage: `url('${categoryData[0].img}')` }}></div>

                <div className='mx-2 w-full sm:w-5/6 lg:h-[26rem] sm:mx-auto rounded-xl shadow-xl lg:flex lg:overflow-hidden bg-primary bg-opacity-10 backdrop-blur'>

                    <div className="hidden lg:flex lg:w-3/6 h-full items-end justify-center bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url('${categoryData[0].img}')` }}>
                        <div className="bg-primary backdrop-blur bg-opacity-50 rounded-lg text-white py-2 px-10 flex items-center gap-2 text-sm mb-2">
                            <p className=" text-gray-200 text-xs">Design by</p>
                            <Link href="/" className="font-bold hover:text-primary">Your Company</Link>
                        </div>
                    </div>

                    <div className='lg:w-4/6 h-full p-4 text-white'>
                        <form className='flex flex-col justify-between h-full space-y-4' method="POST" onSubmit={handleSubmit}>

                            <div className='flex flex-col-reverse md:flex-row md:justify-between md:items-center gap-4 md:gap-0'>
                                <div className='flex items-center justify-between md:gap-10 bg-primary bg-opacity-20 rounded-lg py-1 px-10'>
                                    <div>
                                        <Link href='/login' className='grid justify-center items-center font-semibold text-primary'>
                                            Log In
                                        </Link>
                                        <div className="h-1 w-full rounded-xl bg-primary mt-1"></div>
                                    </div>
                                    <Link href='/register' className='grid justify-center items-center font-semibold'>
                                        Sign Up
                                    </Link>
                                </div>

                                <Link href="/" className=''>
                                    <div className='flex flex-col items-center justify-center'>
                                        <p className='text-3xl font-black flex  gn-black uppercase'>Shopsa</p>
                                        <p className='text-zinc-500'>Find anything what you want !</p>
                                    </div>
                                </Link>
                            </div>

                            <div className='text-black font-extralight'>
                                <p className='text-xl'>Welcome to the <button type="button" onClick={() => []} className="text-black font-bold hover:text-primary">Shopsa</button> family.</p>
                            </div>

                            <div className="bg-primary-800 flex pl-3 rounded-lg items-center text-gray-200 shadow-sm">
                                <UserIcon className="h-5 w-5 mr-2 text-gray-200" />
                                <div className="relative w-full">
                                    <input required name="username" type="text" placeholder=" " id="username" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded-lg border-1 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer" />
                                    <label htmlFor="username" className="absolute text-sm text-gray-200 bg-primary-800 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-gray-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Username or Email</label>
                                </div>
                            </div>
                            <div className="bg-primary-800 flex pl-3 rounded-lg items-center text-gray-200 shadow-sm">
                                <LockClosedIcon className="h-5 w-5 mr-2 text-gray-200" />
                                <div className="relative w-full">
                                    <input required name="password" type="password" placeholder=" " id="password" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded-lg border-1 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer" />
                                    <label htmlFor="password" className="absolute text-sm text-gray-200 bg-primary-800 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-gray-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Password</label>
                                </div>
                            </div>

                            {((err && !loading) || (err && !loading)) &&
                                <div className='justify-center flex text-red-500'>
                                    <p className=''>{err}</p>
                                </div>
                            }
                            <div className='justify-center flex text-gray-100'>
                                <p className='text-sm'>Forgot <Link href="/password/forgot" className='hover:text-primary'>Password</Link>?</p>
                            </div>

                            <div className='justify-center flex'>
                                {loading ?
                                    <div className='bg-primary mx-2 px-12 py-2 rounded-lg font-bold text-white w-full text-center'>
                                        Wait . . .
                                    </div>
                                    :
                                    <button type='submit' className='bg-primary mx-2 px-12 py-2 rounded-lg font-bold text-white w-full text-center transition-all hover:-translate-y-1 hover:bg-primary'>
                                        Login
                                    </button>
                                }
                            </div>
                            <button onClick={() => { }} type="button" className='flex items-center gap-2 text-white bg-black rounded-xl py-2 px-4 w-fit text-sm hover:bg-red-500'>
                                <Image
                                    width={50}
                                    height={50}
                                    className='h-5 w-5'
                                    src='/assets/img/icon/google.svg'
                                    alt=""
                                    loading="lazy"
                                />
                                <p className=''>Login with google</p>
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Login;