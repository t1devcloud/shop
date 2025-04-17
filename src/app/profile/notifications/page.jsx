import MsgNotifications from '../../../components/profile/MsgNotifications'
import PageTitle from '../../../components/shared/PageTitle'

export default function Notifications() {
  return (
    <main className="mt-55">
      {/* page-title */}
      <PageTitle title="Notifications"/>

      <MsgNotifications/>
    </main>
  )
}
