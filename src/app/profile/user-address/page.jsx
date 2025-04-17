import AllAddress from "@/components/profile/AllAddress";
import PageTitle from "@/components/shared/PageTitle";

export default function UserAddress() {
  return (
    <main className="profile-main user-address">
      {/* page-title */}
      <PageTitle title="My Address" link="/profile/add-address"/>
      <AllAddress/>
    </main>
  )
}
