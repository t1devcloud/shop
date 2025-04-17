import Faq from '@/components/profile/Faq'
import PageTitle from '@/components/shared/PageTitle'
import Search from '@/components/shared/Search'

export default function HelpSupport() {
  return (
    <main className="mt-55">
      {/* page-title */}
      <PageTitle title="Help and Support"/>
      <div className="px-24">
        <Search/>
      </div>
      <Faq/>
    </main>
  )
}
