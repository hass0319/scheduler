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

  // A function that creates an interview by using id as refrence and the interview object for the data
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

  // A function that cancesls interviews using the interview id
  function cancelInterview(id) {

    return axios.delete(`/api/appointments/${id}`)
      .then(() => {

        // reassigning appointments and appointment with interview null
        const appointment = {
          ...state.appointments[id],
          interview: null
        };
        const appointments = {
          ...state.appointments,
          [id]: appointment
        };

        // loops over the days array to find the the needed day and index, to be used as refrence for the updated spots function
        const dayOfWeek = state.days.findIndex((day) => state.day === day.name)

        state.days[dayOfWeek].spots = state.days[dayOfWeek].spots + updateSpots(state, id, appointments);

        setState({
          ...state,
          appointments,
        });
      })
  };

  // useEffect hook is used to asure that the component makes an asynchronous request to the API server, it is triggered when onChange
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

  // a function to update spots without refreshing page
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