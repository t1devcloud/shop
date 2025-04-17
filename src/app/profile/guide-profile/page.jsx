import GuideProfileAbout from '@/components/profile/GuideProfileAbout'
import GuideProfileBanner from '@/components/profile/GuideProfileBanner'
import GuideProfileInfo from '@/components/profile/GuideProfileInfo'
import GuideProfileLocation from '@/components/profile/GuideProfileLocation'
import GuideProfileSummery from '@/components/profile/GuideProfileSummery'

export default function GuideProfile() {
  return (
    <main className="guide-profile mt-55">
      <GuideProfileBanner/>
      <GuideProfileInfo/>
      <GuideProfileSummery/>
      <GuideProfileAbout/>
      <GuideProfileLocation/>
    </main>
  )
}
