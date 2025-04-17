import ChatMessage from '@/components/chat/ChatMessage'
import PageTitle from '@/components/shared/PageTitle'
import Search from '@/components/shared/Search'
import Image from 'next/image'
import plus from '@/public/assets/svg/plus-white.svg'

export default function Message() {
  return (
    <main className='mt-55'>
      <PageTitle title="Message"/>
      <div className="px-24">
        <Search/>
      </div>
      <ChatMessage/>
      {/*  add button */}
      <button type="button" className="add-chat d-flex align-items-center justify-content-center rounded-full">
        <Image src={plus} alt="plus"/>
      </button>
    </main>
  )
}
