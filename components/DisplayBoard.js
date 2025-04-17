import React from 'react'
import { Carousel } from "flowbite-react";
import Image from 'next/image'
import Link from 'next/link';

function DisplayBoard({ data, css = "bg-zinc-100 rounded-xl w-full h-[14rem]" }) {
    return (
        <div className={css}>
            {data.length !== 0 &&
                <Carousel slideInterval={5000}>
                    {data.map((e, i) =>
                        <Link key={i} href={e?.link} className="flex items-center justify-center overflow-hidden h-full w-full">
                            <Image
                                width={500}
                                height={500}
                                className="z-10 h-full"
                                src={e?.img}
                                alt={e?.description + " | "}
                                loading="lazy"
                            />
                            <Image
                                width={500}
                                height={500}
                                className="w-full h-full absolute blur lg:blur-3xl"
                                src={e?.img}
                                alt={e?.description + " | "}
                                loading="lazy"
                            />
                        </Link>
                    )}
                </Carousel>
            }
        </div>
    )
}

export default DisplayBoard