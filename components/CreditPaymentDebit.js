import React from 'react'
import Image from 'next/image'

function CreditPaymentDebit() {
    return (
        <div className="gn-back rounded-xl relative text-white">
            <div className="p-4">
                <div className="flex justify-between">
                    <div className="">
                        <p className="font-light text-xs text-zinc-100">
                            Name
                        </p>
                        <input type='text' className="font-medium tracking-widest bg-transparent outline-none border-0 w-full h-8 mt-1 focus:ring-white rounded-xl" defaultValue="Melikoa" />
                    </div>
                    <Image alt="" width="300" height="300" className="w-14 h-14" src="/shop/master.png" />
                </div>
                <div className="pt-1">
                    <p className="font-light text-xs text-zinc-100">
                        Card Number
                    </p>
                    <input type='text' className="font-medium tracking-more-wider bg-transparent outline-none border-0 w-full h-8 mt-1 focus:ring-white rounded-xl" defaultValue="4642  3489  9867  7632" />
                </div>
                <div className="pt-6 pr-6">
                    <div className="flex justify-between">
                        <div className="">
                            <p className="font-light text-xs text-zinc-100">
                                Valid
                            </p>
                            <input type='text' className="font-medium tracking-wider text-sm bg-transparent outline-none border-0 w-full h-6 mt-1 focus:ring-white rounded-xl" defaultValue="11/15" />
                        </div>
                        <div className="">
                            <p className="font-light text-xs text-zinc-100">
                                Expiry
                            </p>
                            <input type='text' className="font-medium tracking-wider text-sm bg-transparent outline-none border-0 w-full h-6 mt-1 focus:ring-white rounded-xl" defaultValue="03/25" />
                        </div>

                        <div className="">
                            <p className="font-light text-xs text-zinc-100">
                                CVV
                            </p>
                            <input type='password' className="font-bold tracking-more-wider text-sm bg-transparent outline-none border-0 w-full h-6 mt-1 focus:ring-white rounded-xl" defaultValue="···" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CreditPaymentDebit