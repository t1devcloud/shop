import Image from "next/image";
import avatar from "@/public/assets/images/profile/avatar.png"
import map from "@/public/assets/svg/map-marker.svg"
import edit from "@/public/assets/svg/edit.svg"
import Link from "next/link";

export default function ProfileHeading() {
  return (
    <section className="user-profile-heading d-flex align-items-center justify-content-between">
      <div className="d-flex align-items-center gap-12">
        <div className="image rounded-full overflow-hidden shrink-0">
          <Image src={avatar} alt="avatar" className="img-fluid w-100 h-100 object-fit-cover"/>
        </div>
        <div>
          <h3>Andy Lexsian</h3>
          <p className="d-flex align-items-center gap-04 location mt-04">
            <Image src={map} alt="icon"/>
            Uttar Pradesh, India 
          </p>
        </div>
      </div>

      <Link href="/profile/user-info" className="edit-info">
        <Image src={edit} alt="icon"/>
      </Link>
    </section>
  )
}
