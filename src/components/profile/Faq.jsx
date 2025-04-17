"use client"

import Accordion from 'react-bootstrap/Accordion';
import { faq_data } from '@/public/data/profile-data';

export default function Faq() {
  return (
      <section className="faq px-24 py-32">
        <Accordion defaultActiveKey="0" className="accordion">
          {
            faq_data.map(({id, title, description}) => (
              <Accordion.Item eventKey={`${id}`} key={id}>
                <Accordion.Header>{title}</Accordion.Header>
                <Accordion.Body>
                  <p>{description}</p>
                </Accordion.Body>
              </Accordion.Item>
            ))
          }
        </Accordion>
      </section>
  )
}
