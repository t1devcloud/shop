import Image from 'next/image'

export default function FacilityCard({data}) {
  const {icon, title} = data;
  return (
    <div className="facility-card item text-center">
      <div className="icon d-flex align-items-center justify-content-center rounded-full">
        <Image src={icon} alt="icon"/>
      </div>
      <p>{title}</p>
    </div>
  )
}
