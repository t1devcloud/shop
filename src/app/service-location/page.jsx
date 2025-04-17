import ServiceMap from '@/components/service/ServiceMap'
import PageTitle from '@/components/shared/PageTitle'

export default function ServiceLocation() {
  return (
    <main className="service-loc mt-55">
      <PageTitle title="Locations"/>
      <ServiceMap/>
    </main>
  )
}
