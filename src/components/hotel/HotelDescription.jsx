import { useState } from 'react'

export default function HotelDescription() {
  const [more, setMore] = useState(false);

  return (
    <section className="details-info py-16">
      <div className="title">
        <h4>Details</h4>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor ac leo lorem nisl. Viverra vulputate sodales quis et dui, lacus. Iaculis eu egestas leo egestas vel. 
        {
          more &&
        <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, voluptatem.</span>
        }
        <button type="button" onClick={() => setMore(!more)}>
          {
            more ? 'Show Less' : 'More Details'
          }
        </button>
      </p>
    </section>
  )
}
