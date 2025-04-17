import SecurityCheck from "@/components/profile/SecurityCheck";
import PageTitle from "@/components/shared/PageTitle";

export default function Security() {
  return (
    <main className="mt-55">
      {/* page-title */}
      <PageTitle title="Security"/>

      <SecurityCheck/>
    </main>
  )
}
