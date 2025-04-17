import Image from 'next/image'
import profileImg from '@/public/assets/images/profile/profile.png'

export default function GuideProfileInfo() {
  return (
    <section className="profile-info px-24">
      <div className="image overflow-hidden radius-10">
        <Image src={profileImg} alt="profile" className="img-fluid w-100"/>
      </div>

      <h3>Jonsky Alexia</h3>
      <p>International tour guide in <span>india</span> <br/> Travel and food vlogger</p>
      <div className="d-flex align-items-center gap-16">
        <a href="#" className="msg-btn flex-grow d-inline-block radius-12">Send Message</a>
        <a href="#" className="call-btn shrink-0 d-inline-block radius-12">Call Now</a>
      </div>
    </section>
  )
}
