import { MobileCategory } from "../../mobilePages"
import { DesktopCategory } from "../../desktopPages"
import useWidth from "../../hooks/useWidth"

function Category() {
    const width = useWidth();

    return (
        <>
            {width > 0 && 1024 <= width ?
                <DesktopCategory />
                :
                <MobileCategory />
            }
        </>
    )
}

export default Category