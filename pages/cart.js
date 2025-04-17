import { MobileCart } from "../mobilePages"
import { DesktopCart } from "../desktopPages"
import useWidth from "../hooks/useWidth"
import { Loading } from '@/components'

function Cart() {
    const width = useWidth();

    return (
        <>
            {width < 0 ?
                <Loading />
                :
                <>
                    {1024 <= width ?
                        <DesktopCart />
                        :
                        <MobileCart />
                    }

                </>
            }
        </>
    )
}

export default Cart