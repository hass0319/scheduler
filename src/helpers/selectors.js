

export const getAppointmentsForDay = (state, day) => {

  const getDays = state.days;

  // filter is used to loop over days array to get the wanted day
  const filteredDays = getDays.filter(
    (arr) => arr.name === day
  );

  if (!filteredDays || filteredDays.length === 0) return [];

  const getAppointments = filteredDays[0].appointments;
  const dayAppointments = getAppointments.map(
    (el) => state.appointments[el]
  );

  //... returns an array of appointments for that day
  return dayAppointments;
};

export const getInterview = (state, interview) => {
  let interviewData = {};
  let interviewers = state.interviewers;

  let interviewId = interview
    ? interview.interviewer
    : null;

  if (interviewId) {
    interviewData = { ...interviewers[interviewId] };

    const interviewDataObj = {
      student: interview.student,
      interviewer: interviewData
    };

    //... returns an object of the interview data
    return interviewDataObj;
  };

  return null;
};

export const getInterviewersForDay = (state, day) => {

  const getDays = state.days;

  // filter is used to loop over days array to get the wanted day
  const filteredDays = getDays.filter(
    (arr) => arr.name === day
  );

  if (!filteredDays || filteredDays.length === 0) return [];

  const getInterviewers = filteredDays[0].interviewers;
  const interviewersPerDay = getInterviewers.map(
    (el) => state.interviewers[el]
  );

  //... returns an array of interviewers for that day
  return interviewersPerDay;
};