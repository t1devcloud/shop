import AllHotels from '@/components/hotel/AllHotels'
import PageTitle from '@/components/shared/PageTitle'

export default function Hotels() {
  return (
    <main className="tour-guide mt-55">
      <PageTitle title="Hotels"/>
      <AllHotels/>
    </main>
  )
}
