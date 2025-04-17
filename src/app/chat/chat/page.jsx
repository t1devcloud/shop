import ChatInbox from '@/components/chat/ChatInbox'
import ChatPageTitle from '@/components/chat/ChatPageTitle'
import ChatTypeMessage from '@/components/chat/ChatTypeMessage'

export default function Chat() {
  return (
    <main className="chat mt-55">
      <ChatPageTitle/>
      <ChatInbox/>
      <ChatTypeMessage/>
    </main>
  )
}
