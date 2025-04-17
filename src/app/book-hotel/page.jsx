import InfoList from '@/components/shared/InfoList'
import Facilities from '@/components/hotel/Facilities'
import OrderInfo from '@/components/hotel/OrderInfo'
import SearchHotel from '@/components/hotel/SearchHotel'
import PageTitle from '@/components/shared/PageTitle'
import { customer_info_data } from '@/public/data/info-data'

export default function BookHotel() {
  return (
    <main className="booking-main book-hotel mt-55">
      <PageTitle title="Book Hotel"/>

      <div className="details-body">
        {
          customer_info_data.map((item) => <InfoList key={item.id} data={item}/>)
        }
        <OrderInfo/>
        <Facilities/>
        <SearchHotel/>
      </div>
    </main>
  )
}
