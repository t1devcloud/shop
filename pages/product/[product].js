import { MobileProduct } from "../../mobilePages"
import { DesktopProduct } from "../../desktopPages"
import useWidth from "../../hooks/useWidth"


function Product() {
    const width = useWidth();

    return (
        <>
            {width > 0 && 1024 <= width ?
                <DesktopProduct />
                :
                <MobileProduct />
            }
        </>
    )
}

export default Product