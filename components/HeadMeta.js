import React from 'react'
import Head from 'next/head'
import NextNProgress from 'nextjs-progressbar';

function HeadMeta({ title }) {
    return (
        <>
            <NextNProgress color="#000" />
            <Head>
                <title>{title}</title>
            </Head>
        </>
    )
}

export default HeadMeta