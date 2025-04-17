import Footer from "@/components/shared/Footer";
import BookedTicket from "@/components/ticket/BookedTicket";

export default function TicketBooked() {
  return (
    <main className="ticket">
      {/* page-title */}
      <div className="page-title">
        <h3 className="main-title">My Booked</h3>
      </div>
      <BookedTicket/>
      <Footer/>
    </main>
  )
}
