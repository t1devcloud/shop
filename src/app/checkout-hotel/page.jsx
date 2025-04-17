import InfoList from "@/components/shared/InfoList";
import OrderCard from "@/components/shared/OrderCard";
import HotelOrders from "@/components/hotel/HotelOrders";
import HotelPayButton from "@/components/hotel/HotelPayButton";
import PaymentMethod from "@/components/shared/PaymentMethod";
import PageTitle from "@/components/shared/PageTitle";
import { customer_info_data } from "@/public/data/info-data";

export default function CheckoutHotel() {
  return (
    <main className="booking-main checkout-hotel mt-55">
      <PageTitle title="Checkout"/>
      <div className="details-body">
        <OrderCard/>
        {
          customer_info_data.map((item) => <InfoList key={item.id} data={item}/>)
        }
        <HotelOrders/>
        <PaymentMethod/>
        <HotelPayButton/>
      </div>
    </main>
  )
}
