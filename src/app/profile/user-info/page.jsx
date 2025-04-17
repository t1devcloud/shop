import ProfileImage from '@/components/profile/ProfileImage'
import ProfileInfo from '@/components/profile/ProfileInfo'
import PageTitle from '@/components/shared/PageTitle'

export default function index() {
  return (
    <main className='mt-55'>
      <PageTitle title="Profile"/>
      <ProfileImage/>
      <ProfileInfo/>
    </main>
  )
}
