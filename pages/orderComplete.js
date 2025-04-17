import { MobileOrderComplete } from "../mobilePages"
import { DesktopOrderComplete } from "../desktopPages"
import useWidth from "../hooks/useWidth"
import { Loading } from '@/components'

function OrderComplete() {
    const width = useWidth();

    return (
        <>
            {width < 0 ?
                <Loading />
                :
                <>
                    {1024 <= width ?
                        <DesktopOrderComplete />
                        :
                        <MobileOrderComplete />
                    }
                </>
            }
        </>
    )
}

export default OrderComplete