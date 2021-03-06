import React from "react";

import PropTypes from 'prop-types';

import "components/InterviewerList.scss"
import InterviewerListItem from "./InterviewerListItem.jsx";

// InterviewerList is responsible for rendering a list of InterviewerListItem components.
export default function InterviewerList(props) {

  const propsInterviewers = props.interviewers;

  //Maping over the intervers array to return the InterviewerListItem components as children
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

InterviewerList.propTypes = {
  interviewers: PropTypes.array.isRequired
};