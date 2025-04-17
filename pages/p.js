import { MobileSearch } from "../mobilePages"
import { DesktopSearch } from "../desktopPages"
import useWidth from "../hooks/useWidth"
import { Loading } from '@/components'

function P() {
    const width = useWidth();

    return (
        <>
            {width < 0 ?
                <Loading />
                :
                <>
                    {1024 <= width ?
                        <DesktopSearch />
                        :
                        <MobileSearch />
                    }
                </>
            }
        </>
    )
}

export default P