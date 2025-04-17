import PasswordChange from "@/components/profile/PasswordChange";
import PageTitle from "@/components/shared/PageTitle";

export default function ChangePassword() {

  return (
    <main className="profile-main">
      {/* page-title */}
      <PageTitle title="Change Password"/>

      <PasswordChange/>
    </main>
  )
}
