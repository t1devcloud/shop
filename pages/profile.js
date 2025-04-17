import { MobileProfile } from "../mobilePages"
import { DesktopProfile } from "../desktopPages"
import useWidth from "../hooks/useWidth"
import { Loading } from '@/components'

function Profile() {
    const width = useWidth();
    return (
        <>
            {width < 0 ?
                <Loading />
                :
                <>
                    {1024 <= width ?
                        <DesktopProfile />
                        :
                        <MobileProfile />
                    }
                </>
            }
        </>
    )
}

export default Profile