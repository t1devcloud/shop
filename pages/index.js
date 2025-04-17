import { MobileHome } from "../mobilePages"
import { DesktopHome } from "../desktopPages"
import useWidth from "../hooks/useWidth"
import { Loading } from '@/components'
import Head from 'next/head'

export default function Home() {
  const width = useWidth();

  return (
    <>
      <Head>
        <title>ShopSA - Home</title>
      </Head>
      {width < 0 ?
        <Loading />
        :
        <>
          {1024 <= width ?
            <DesktopHome />
            :
            <MobileHome />
          }
        </>
      }
    </>
  )
}
