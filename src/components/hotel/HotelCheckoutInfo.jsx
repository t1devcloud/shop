import OrderCard from '../shared/OrderCard'

export default function HotelCheckoutInfo() {
  return (
    <>
      <div className="title mb-16">
        <h4>Order Info</h4>
      </div>

      {/* order item */}
      <OrderCard/>
    </>
  )
}
