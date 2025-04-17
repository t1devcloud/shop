import InfoList from '@/components/shared/InfoList'
import OrderCard from '@/components/shared/OrderCard'
import PageTitle from '@/components/shared/PageTitle'
import TicketDetailInfo from '@/components/ticket/TicketDetailInfo'
import { customer_ticket_info, order_info_data } from '@/public/data/info-data'

export default function TicketDetail() {
  return (
    <main className="ticket-detail mt-55">
      <PageTitle title="Detail Ticket"/>

      <div className="details-body">
        {/* invoice number */}
        <div className="invoice-number d-flex align-items-center justify-content-between pb-20">
          <p>INV1273436347</p>
          <span>Will Come</span>
        </div>

        <OrderCard/>

        {
          customer_ticket_info.map((item) => <InfoList classes="pt-12" key={item.id} pclassName={{item: 4, data: "success"}} data={item}/>)
        }
        {
          order_info_data.map((item) => <InfoList classes="pt-12" key={item.id} data={item}/>)
        }

        <TicketDetailInfo/>
      </div>
    </main>
  )
}
