import { MobileOrders } from "../mobilePages"
import { DesktopOrders } from "../desktopPages"
import useWidth from "../hooks/useWidth"
import { Loading } from '@/components'

function Orders() {
    const width = useWidth();

    return (
        <>
            {width < 0 ?
                <Loading />
                :
                <>
                    {1024 <= width ?
                        <DesktopOrders />
                        :
                        <MobileOrders />
                    }
                </>
            }
        </>
    )
}

export default Orders