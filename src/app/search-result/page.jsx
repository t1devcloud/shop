import SearchMain from '@/components/search/SearchMain'
import SearchRecommendation from '@/components/search/SearchRecommendation'
import PageTitle from '@/components/shared/PageTitle'

export default function SearchResult() {
  return (
    <main className="search-result mt-55">
      <PageTitle title="Search Destination"/>
      <SearchMain/>
      <SearchRecommendation/>
    </main>
  )
}
