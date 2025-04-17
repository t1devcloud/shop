import LogoutButton from "@/components/profile/LogoutButton";
import ProfileHeading from "@/components/profile/ProfileHeading";
import UserPersonal from "@/components/profile/UserPersonal";
import Footer from "@/components/shared/Footer";

export default function UserProfile() {
  return (
    <main className="user-profile mt-55">
      <ProfileHeading/>
      <UserPersonal/>
      <LogoutButton/>
      <Footer/>
    </main>
  )
}
