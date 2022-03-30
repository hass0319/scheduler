

export const getAppointmentsForDay = (state, day) => {
  // console.log("state=>", state);
  // console.log("day=>", day)

  const getDays = state.days;
  const filteredDays = getDays.filter((arr) => arr.name === day);
  // console.log("filteredDays=>", filteredDays);
  // console.log("filteredDays[0]=>", filteredDays[0]);

  if (!filteredDays || filteredDays.length === 0) return [];

  const getAppointments = filteredDays[0].appointments;
  const dayAppointments = getAppointments.map((el) => state.appointments[el]);

  console.log("dayAppointments =>", dayAppointments)
  //... returns an array of appointments for that day
  return dayAppointments;
};

// The function should return a new object containing the interview data when we pass it an object that contains the interviewer. Otherwise, the function should return null
// console.log("getInterview state => ", state, "\ninterview =>", interview)
export const getInterview = (state, interview) => {
  let interviewData = {};
  let interviewers = state.interviewers;

  let interviewId = interview
    ? interview.interviewer
    : null;
  // console.log("interviewers => ", interviewers);
  // console.log("interviewId => ", interviewId);

  if (interviewId) {
    // console.log(interviewId);
    interviewData = { ...interviewers[interviewId] };
    // console.log('interviewData =>', interviewData);
    const interviewDataObj = {
      student: interview.student,
      interviewer: interviewData
    };
    console.log('interviewDataObj =>', interviewDataObj);
    return interviewDataObj;
  }
  return null;
};