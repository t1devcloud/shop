import React from 'react'

export default function Location() {
  return (
    <section className="details-location pt-16">
      {/* title */}
      <div className="title">
        <h4>Location</h4>
      </div>

      {/* map */}
      <div className="overflow-hidden radius-16 map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d846588.5514550178!2d-118.35899906676545!3d34.01855672774309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1701149305360!5m2!1sen!2sbd" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </section>
  )
}
