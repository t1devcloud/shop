import AllPlace from '@/components/explore/AllPlace'
import Footer from '@/components/shared/Footer'
import Search from '@/components/shared/Search'

export default function Explore() {
  return (
    <main className="explore">
      <Search/>
      <AllPlace/>
      <Footer/>
    </main>
  )
}
