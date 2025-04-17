import PaymentMethods from "@/components/profile/PaymentMethods";
import PageTitle from "@/components/shared/PageTitle";

export default function UserPayment() {
  return (
    <main className="profile-main user-payment">
      {/* page-title */}
      <PageTitle title="My Payment" link="/profile/add-card"/>

      <PaymentMethods/>
    </main>
  )
}
