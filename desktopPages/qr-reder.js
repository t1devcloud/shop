import { useState, useEffect } from 'react'
import { MenuMobile, HeadMeta } from '@/components'
import { Html5QrcodeScanner } from 'html5-qrcode';
import Image from 'next/image'
import { Rating } from 'flowbite-react';
import { HeartIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { HeartIcon as Like, ChevronLeftIcon } from '@heroicons/react/24/solid'
import Link from 'next/link';
import Router from 'next/router'

const createConfig = () => {
    let config = {};
    config.fps = 10
    config.qrbox = 250
    config.disableFlip = false
    // config.aspectRatio = 1.777778
    return config;
};

const qrcodeRegionId = "reader";

function QrReder() {

    const [dataQr, setDataQr] = useState("")
    const [favorite, setFavorite] = useState(false)
    var html5QrcodeScanner = null

    const onScanSuccess = (decodedText, decodedResult) => {
        if (dataQr === "") {
            navigator.vibrate(200);
            setDataQr(decodedText)
        }
    };





    useEffect(() => {
        // when component mounts
        const config = createConfig();
        const verbose = true;
        // Suceess callback is required.

        html5QrcodeScanner = new Html5QrcodeScanner(qrcodeRegionId, config, verbose);
        html5QrcodeScanner.render(onScanSuccess);

        // cleanup function when component will unmount
        return () => {
            html5QrcodeScanner.clear().catch(error => {
                console.error("Failed to clear html5QrcodeScanner. ", error);
            });
        };
    }, []);

    return (
        <div className="from-white to-zinc-400 bg-gradient-to-br min-h-screen p-4">
            <HeadMeta title="Qr Reder" />
            <link rel="stylesheet" href="/styles/html5-qrcode-css.css"></link>

            <ChevronLeftIcon onClick={() => Router.back()} className="h-14 w-14 p-2 rounded-full bg-black text-white font-black cursor-pointer absolute top-5 left-5 shadow-2xl" />

            <main className=" text-black overflow-x-hidden space-y-2 mx-auto max-w-md bg-zinc-50 rounded-3xl p-4 shadow-2xl">

                <div id={qrcodeRegionId} />
                {dataQr &&
                    <div className="fixed bottom-20 left-1/2 -translate-x-1/2 bg-opacity-95 backdrop-blur bg-white rounded-2xl w-3/12 shadow-xl p-1 flex items-center gap-2 justify-between">
                        <Image
                            width={500}
                            height={500}
                            className="rounded-xl w-20 h-20"
                            src="/shop/po-02.png"
                            alt=""
                            loading="lazy"
                        />
                        <div className='flex-1'>
                            <p className='text-xs text-zinc-600'>Off white & black</p>
                            <Link href={"/product/" + "002"} className=' text-zinc-600 font-bold'>{dataQr}</Link>
                            <Rating>
                                <Rating.Star />
                                <Rating.Star />
                                <Rating.Star />
                                <Rating.Star />
                                <Rating.Star />
                            </Rating>
                        </div>
                        <div className=' flex flex-col items-center justify-between gap-1'>
                            <div onClick={() => favorite ? setFavorite(false) : setFavorite(true)} className="bg-zinc-300 text-white backdrop-blur rounded-full p-1 items-center justify-center flex text-center cursor-pointer">
                                {
                                    favorite ?
                                        <Like className="h-5 w-5 text-red-600" />
                                        :
                                        <HeartIcon className="h-5 w-5" />
                                }
                            </div>
                            <div onClick={() => setDataQr("")} className="bg-zinc-300 text-white backdrop-blur rounded-full p-1 items-center justify-center flex text-center cursor-pointer">
                                <XMarkIcon className="h-5 w-5" />
                            </div>
                        </div>
                    </div>
                }
            </main>
        </div>
    )
}

export default QrReder