import React, { useState } from "react";

import { days, interviewers } from "./data.jsx";

import "components/Application.scss";
import DayList from "./DayList.jsx";
import InterviewerList from "./InterviewerList.jsx";


export default function Application(props) {
  const [day, setDay] = useState("");
  // const [interviewer, setInterviewer] = useState("");

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
        {/* <InterviewerList /> */}
        {/* Replace this with the schedule elements durint the "The Scheduler" activity. */}
      </section>
    </main>
  );
}
