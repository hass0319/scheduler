import React from "react";

import "components/Application.scss";
import DayList from "./DayList.jsx";
import Appointment from "./Appointment/index.js";
import useApplicationData from "hooks/useApplicationData.js";
import { getAppointmentsForDay, getInterview, getInterviewersForDay } from "helpers/selectors.js";


export default function Application(props) {
  const {
    state,
    setDay,
    bookInterview,
    cancelInterview
  } = useApplicationData();

  const dailyAppointments = getAppointmentsForDay(state, state.day);
  const interviewers = getInterviewersForDay(state, state.day);

  //Maping the schedule for the day and passing the info for each day as props
  const appointments = dailyAppointments.map(el => {
    const interview = getInterview(state, el.interview);
    return (
      <Appointment
        key={el.id}
        {...el}
        interview={interview}
        interviewers={interviewers}
        bookInterview={bookInterview}
        cancelInterview={cancelInterview}
      ></Appointment>
    );
  });

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
            days={state.days}
            value={state.day}
            setDay={setDay}
          />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />

      </section>
      <section className="schedule">
        {appointments}
        <Appointment
          key="last"
          time="5pm"
        />
      </section>
    </main>
  );
}
