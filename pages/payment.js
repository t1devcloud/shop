import { useEffect } from 'react'
import { MobilePayment } from "../mobilePages"
import useWidth from "../hooks/useWidth"
import Router from 'next/router'
import { Loading } from '@/components'

function Payment() {
    const width = useWidth();

    useEffect(() => {
        if (width > 0 && 1024 <= width) {
            Router.push("/cart/")
        }
    }, [width]);

    return (
        <>
            {width < 0 ?
                <Loading />
                :
                <>
                    {1024 > width && <MobilePayment />}
                </>
            }
        </>
    )
}

export default Payment