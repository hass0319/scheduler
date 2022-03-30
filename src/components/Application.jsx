import React, { useState, useEffect } from "react";

import axios from "axios";

import "components/Application.scss";
import DayList from "./DayList.jsx";
import Appointment from "./Appointment/index.js";
import { getAppointmentsForDay, getInterview } from "helpers/selectors.js";


export default function Application(props) {
  // console.log("props", props)
  // console.log("appointments", appointments)

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: [],
    interviewers: []
  });

  const setDay = day => setState({ ...state, day });
  // const setDays = days => setState(prev => ({ ...prev, days }));
  // const setAppointments = appointments => setState(prev => ({ ...prev, appointments }));

  const dailyAppointments = getAppointmentsForDay(state, state.day);

  const schedule = dailyAppointments.map(el => {
    const interview = getInterview(state, el.interview);
    return (
      <Appointment
        key={el.id}
        id={el.id}
        time={el.time}
        interview={interview}
        interviewer={el.interviewer}
      ></Appointment>
    );
  });
  // const setDay = (day) => {
  //   console.log("day=>", day)

  //   const dayCopy = [...state, day]

  //   console.log("dayCopy = [...state, day] =>", dayCopy)
  //   console.log("dayCopy = [...state, day] =>", day)

  //   dayCopy.push(day);
  //   console.log("dayCopy.push(day);", dayCopy)
  //   return setState(dayCopy);
  // }

  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers")
    ])
      .then((all) => {
        setState(prev => ({
          ...prev,
          days: all[0].data,
          appointments: all[1].data,
          interviewers: all[2].data
        }))
      })
      .catch((err) => {
        console.log(err.all.status);
        console.log(err.all.headers);
        console.log(err.all.data);
      });
  },
    []
  );

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
        {schedule}
        <Appointment
          key="last"
          time="5pm"
        />
      </section>
    </main>
  );
}
