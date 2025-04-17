import { MobileWishlist } from "../mobilePages"
import { DesktopWishlist } from "../desktopPages"
import useWidth from "../hooks/useWidth"
import { Loading } from '@/components'

function Wishlist() {
	const width = useWidth();
	return (
		<>
			{width < 0 ?
				<Loading />
				:
				<>
					{1024 <= width ?
						<DesktopWishlist />
						:
						<MobileWishlist />
					}
				</>
			}
		</>
	)
}

export default Wishlist