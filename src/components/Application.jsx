import React, { useState } from "react";

import { days, appointments } from "./data.jsx";

import "components/Application.scss";
import DayList from "./DayList.jsx";
import Appointment from "./Appointment/index.js";



export default function Application(props) {
  const [day, setDay] = useState("");
  // const [interviewer, setInterviewer] = useState("");
  // console.log("props", props)
  // console.log("appointments", appointments)

  const schedule = Object.values(appointments).map(el => {
    return (
      <Appointment
        key={el.id}
        id={el.id}
        time={el.time}
        interview={el.interview}
        interviewer={el.interviewer}
      ></Appointment>
    );
  })

  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList
            days={days}
            value={day}
            onChange={setDay}
          />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />

      </section>
      <section className="schedule">
        {schedule}
        <Appointment
          key="last"
          time="5pm"
        />
      </section>
    </main>
  );
}
