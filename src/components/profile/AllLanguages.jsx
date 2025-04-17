"use client"

import { select_language_data } from '@/public/data/select-language-data'

export default function AllLanguages() {
  return (
    <>
      <section className="suggested px-24 pb-24">
        <div className="border-box">
          <h5>Suggested Languages</h5>
          <ul>
            {
              select_language_data.slice(0,3).map(({id, inputId, title}) => (
                <li key={id}>
                  <label htmlFor={inputId} className="custom-check-container language-container">
                    <input type="radio" name="user-lang" id={inputId} defaultChecked={id === 1}/>
                    <span className="checkmark"></span>
                    {title}
                  </label>
                </li>
              ))
            }
          </ul>
        </div>
      </section>

      <section className="suggested px-24 pb-36">
        <div className="border-box">
          <h5>Other Languages</h5>
          <ul>
            {
              select_language_data.slice(3).map(({id, inputId, title}) => (
                <li key={id}>
                  <label htmlFor={inputId} className="custom-check-container language-container">
                    <input type="radio" name="user-lang" id={inputId} defaultChecked={id === 1}/>
                    <span className="checkmark"></span>
                    {title}
                  </label>
                </li>
              ))
            }
          </ul>
        </div>
      </section>
    </>
  )
}
