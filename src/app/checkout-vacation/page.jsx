import InfoList from "@/components/shared/InfoList";
import HotelCheckoutInfo from "@/components/hotel/HotelCheckoutInfo";
import HotelCheckoutPrice from "@/components/hotel/HotelCheckoutPrice";
import HotelPayButton from "@/components/hotel/HotelPayButton";
import HotelVisitDate from "@/components/hotel/HotelVisitDate";
import PageTitle from "@/components/shared/PageTitle";
import PaymentMethod from "@/components/shared/PaymentMethod";
import { customer_info_data } from "@/public/data/info-data";

export default function CheckoutVacation() {
  return (
    <main className="booking-main checkout-vacation mt-55">
      <PageTitle title="Checkout Vacation"/>
      {
        customer_info_data.map((item) => <InfoList classes="px-24" key={item.id} data={item}/>)
      }
      <section className="order-info px-24 pt-12 pb-24">
        <HotelCheckoutInfo/>
        <HotelVisitDate/>
        <HotelCheckoutPrice/>
        <PaymentMethod/>
        <HotelPayButton/>
      </section>
    </main>
  )
}
