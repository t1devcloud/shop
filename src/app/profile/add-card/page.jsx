import ProfileCard from '@/components/profile/ProfileCard'
import PageTitle from '@/components/shared/PageTitle'

export default function AddCard() {
  return (
    <main className="profile-main">
      <PageTitle title="Add New Card"/>
      <ProfileCard/>
    </main>
  )
}
