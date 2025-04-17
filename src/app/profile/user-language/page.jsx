import AllLanguages from "@/components/profile/AllLanguages";
import PageTitle from "@/components/shared/PageTitle";

export default function UserLanguage() {
  return (
    <main className="mt-55">
      {/* page-title */}
      <PageTitle title="Language"/>

      <AllLanguages/>
    </main>
  )
}
