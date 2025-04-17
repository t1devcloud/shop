import { MobileQrReder } from "../mobilePages"
import { DesktopQrReder } from "../desktopPages"
import useWidth from "../hooks/useWidth"
import { Loading } from '@/components'

function QrReder() {
    const width = useWidth();

    return (
        <>
            {width < 0 ?
                <Loading />
                :
                <>
                    {1024 <= width ?
                        <DesktopQrReder />
                        :
                        <MobileQrReder />
                    }
                </>
            }
        </>
    )
}

export default QrReder