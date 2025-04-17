import InfoList from '../shared/InfoList'
import { order_info_data } from '@/public/data/info-data'

export default function HotelOrders() {
  return (
    <section className="customer-info order-info py-12">
      {
        order_info_data.map((item) => <InfoList key={item.id} data={item}/>)
      }

        {/* total-price */}
        <div className="price border-t d-flex align-items-center justify-content-between pt-24">
          <p>Total</p>
          <p><span>$320</span></p>
        </div>

        {/* promo-code */}
        <div className="promo-code pt-24 pb-16">
          <div className="sub-title mb-16">
            <h4>Promo Code</h4>
          </div>
  
          <div className="d-flex align-items-center gap-8 input-area">
            <input type="text" placeholder="Input code" className="flex-grow"/>
            <button type="button" className="shrink-0">Apply</button>
          </div>
        </div>
  
        {/* promo-price */}
        <div className="price border-b pb-24 promo-price d-flex align-items-center justify-content-between">
          <p>Promo</p>
          <p><span>-$20</span></p>
        </div>
  
        {/* total-price */}
        <div className="price d-flex align-items-center justify-content-between pt-24">
          <p>Total Pay</p>
          <p><span>$300</span></p>
        </div>
      </section>
  )
}
