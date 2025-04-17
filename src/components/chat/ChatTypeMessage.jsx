import Image from 'next/image'
import paperclip from '@/public/assets/svg/paperclip.svg'
import send from '@/public/assets/svg/send.svg'

export default function ChatTypeMessage() {
  return (
    <section className="type-msg">
      <form action="#">
        <div className="d-flex align-items-center gap-8 type-main">
          <label for="input-file" className="input-file-label shrink-0">
            <input type="file" id="input-file"/>
            <span className="d-flex align-items-center justify-content-center rounded-full">
              <Image src={paperclip} alt="icon"/>
            </span>
          </label>

          <input type="text" placeholder="Message" className="flex-grow input-msg"/>

          <button type="button" className="d-flex align-items-center justify-content-center rounded-full shrink-0">
            <Image src={send} alt="icon"/>
          </button>
        </div>
      </form>
    </section>
  )
}
