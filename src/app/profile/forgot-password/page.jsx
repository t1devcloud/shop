import ProfileForgotPassword from "@/components/profile/ProfileForgotPassword";
import PageTitle from "@/components/shared/PageTitle";

export default function ForgotPassword() {
  return (
    <main className="profile-main">
      {/* page-title */}
      <PageTitle title="Forgot Password"/>

      <ProfileForgotPassword/>
    </main>
  )
}
