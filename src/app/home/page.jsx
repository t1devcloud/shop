import AuthorInfo from '@/components/home/AuthorInfo'
import BudgetTour from '@/components/home/BudgetTour'
import HomeBanner from '@/components/home/HomeBanner'
import Service from '@/components/home/Service'
import TourGuide from '@/components/home/TourGuide'
import Visited from '@/components/home/Visited'
import Footer from '@/components/shared/Footer'
import Search from '@/components/shared/Search'

export default function Home() {

  return (
    <main className='home'>
      <AuthorInfo/>
      <Search/>
      <HomeBanner/>
      <Service/>
      <Visited/>
      <TourGuide/>
      <BudgetTour/>
      <Footer/>
    </main>
  )
}
