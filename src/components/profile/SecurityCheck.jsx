"use client"

import { security_data } from "@/public/data/profile-data";
import { useState } from "react";

export default function SecurityCheck() {
  const [activeSwitches, setActiveSwitches] = useState([]);

  const toggleSwitch = (id) => {
    if (activeSwitches.includes(id)) {
      setActiveSwitches(activeSwitches.filter((activeId) => activeId !== id));
    } else {
      setActiveSwitches([...activeSwitches, id]);
    }
  };

  return (
    <section className="msg-notifications px-24">
      <div className="border-box">
        <h5>Messages Notifications</h5>
        <ul>
          {
            security_data.map(({id, title}) => (
              <li key={id} className="d-flex align-items-center justify-content-between">
                <p>{title}</p>
                <label className="toggle-switch">
                  <input type="checkbox" className="mode-switch" checked={activeSwitches.includes(id)} onChange={() => toggleSwitch(id)}/>
                  <span className={`slider ${activeSwitches.includes(id) && 'active'}`}></span>
                </label>
              </li>
            ))
          }
        </ul>
      </div>
    </section>
  )
}
