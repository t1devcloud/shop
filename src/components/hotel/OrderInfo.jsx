import OrderCard from '../shared/OrderCard'

export default function OrderInfo() {
  return (
    <section className="order-info py-12">
        <div className="title mb-16">
          <h4>Order Info</h4>
        </div>
  
        {/* order item */}
        <OrderCard/>

        {/* room-type */}
        <div className="room-type mt-16 d-flex align-items-center justify-content-between">
          <p>Type Room</p>
          <p>Presidential Suite</p>
        </div>
      </section>
  )
}
