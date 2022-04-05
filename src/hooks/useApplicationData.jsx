import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData(props) {

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: [],
    interviewers: []
  });

  const setDay = day => setState({ ...state, day });

  function bookInterview(id, interview) {

    return axios.put(`/api/appointments/${id}`, { interview })
      .then((res) => {
        const appointment = {
          ...state.appointments[id],
          interview: { ...interview }
        };
        const appointments = {
          ...state.appointments,
          [id]: appointment
        };
        const dayOfWeek = state.days.findIndex(
          (day) => state.day === day.name
        );
        state.days[dayOfWeek].spots = state.days[dayOfWeek].spots + updateSpots(state, id, appointments);

        setState({
          ...state,
          appointments
        });
      });
  };

  function cancelInterview(id) {

    return axios.delete(`/api/appointments/${id}`)
      .then((res) => {

        const appointment = {
          ...state.appointments[id],
          interview: null
        };
        const appointments = {
          ...state.appointments,
          [id]: appointment
        };
        const dayOfWeek = state.days.findIndex((day) => state.day === day.name)

        state.days[dayOfWeek].spots = state.days[dayOfWeek].spots + updateSpots(state, id, appointments);

        setState({
          ...state,
          appointments,
        });
      })
  };

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

  function updateSpots(state, id, appointments) {

    const oldInterview = state.appointments[id]
      ? state.appointments[id].interview
      : null;
    const newInterview = appointments[id]
      ? appointments[id].interview
      : null;

    let counter = 0;

    // if nothing changed
    if (newInterview !== null && oldInterview !== null) {
      counter = 0;
    };
    // if created
    if (oldInterview === null && newInterview !== null) {
      counter = -1
    };
    // if deleted
    if (newInterview === null && oldInterview !== null) {
      counter = +1;
    };

    return counter;
  };

  return {
    state,
    setDay,
    bookInterview,
    cancelInterview
  };
};