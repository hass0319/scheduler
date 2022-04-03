import React from "react";

import "components/InterviewerList.scss"
import InterviewerListItem from "./InterviewerListItem.jsx";

export default function InterviewerList(props) {
  // console.log("props", props);
  // console.log("props.interviewer", props.value);
  console.log("props.interviewers", props.interviewers);
  // console.log("props.interviewers[0]", props.interviewers[0]);

  const propsInterviewers = props.interviewers;
  const mappedInterviewers = propsInterviewers.map(el => {

    return (
      <InterviewerListItem
        key={el.id}
        name={el.name}
        avatar={el.avatar}
        selected={el.id === props.value}
        setInterviewer={(event) => props.onChange(el.id)}
      >
      </InterviewerListItem>
    );
  })
  // console.log("mappedInterviewers", mappedInterviewers);
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">
        {mappedInterviewers.name}
      </h4>
      <ul className="interviewers__list">
        {mappedInterviewers}
      </ul>
    </section>
  );
}
