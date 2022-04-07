import React from "react";

import "./styles.scss";

import Confirm from "./Confirm";
import Empty from "./Empty";
import Error from "./Error";
import Form from "./Form";
import Header from "./Header";
import Show from "./Show";
import Status from "./Status";


import useVisualMode from "hooks/useVisualMode";

export default function Appointment(props) {

  const CREATE = "CREATE";
  const CONFIRM = "CONFIRM";
  const DELETING = "DELETING";
  const EDIT = "EDIT";
  const EMPTY = "EMPTY";
  const ERROR_DELETE = "ERROR_DELETE";
  const ERROR_SAVE = "ERROR_SAVE";
  const SAVING = "SAVING";
  const SHOW = "SHOW";

  //  SETTIMEOUT is used to show the saving and deleting transition

  // defines mode(state) and funtions (transition, back) form useVisualMode.js
  // if there is an interview Show mode is default, else Empty mode
  const { mode, transition, back } = useVisualMode(
    props.interview
      ? SHOW
      : EMPTY
  );

  function onAdd() {
    transition(CREATE);
  };

  function onCancel() {
    back();
  };

  // when save is clicked student name and interviewer selected are added to the interview object to be used by bookInterview function
  function onSave(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };

    transition(SAVING);

    props
      .bookInterview(props.id, interview)
      .then(() => {
        setTimeout(() => {
          transition(SHOW);
        }, 100);
      })

      .catch(err => {
        transition(ERROR_SAVE, true)
      });
  };

  // when delete is clicked interview, appointment id is refrenced, and is used by cancelInterview function

  function onDELETE() {
    transition(DELETING, true);
    props
      .cancelInterview(props.id)
      .then(() => {
        setTimeout(() => {
          transition(EMPTY);
        }, 100);
      })
      .catch(err => transition(ERROR_DELETE, true))
  };

  return (
    < article className="appointment" >

      {/* ---------HEADER--------- */}
      <Header
        time={props.time}
      />

      {/* --------------VISUAL MODE-------------- */}

      {/* ---------MODE--CREATE--------- */}
      {mode === CREATE && (
        <Form
          interviewers={props.interviewers}
          onSave={onSave}
          onCancel={onCancel}
        />
      )}

      {/* ---------MODE--CONFIRM--------- */}
      {mode === CONFIRM && (
        <Confirm
          message="Are you sure you would like to delete?"
          onCancel={onCancel}
          onConfirm={onDELETE}
        />
      )}

      {/* ---------MODE--DELETING--------- */}
      {mode === DELETING && <Status message=" DELETING" />}

      {/* ---------MODE--EDIT--------- */}
      {mode === EDIT && (
        <Form
          name={props.interview && props.interview.student}
          interviewer={props.interview && props.interview.interviewer.id}
          interviewers={props.interviewers}
          onSave={onSave}
          onCancel={onCancel}
        />
      )}

      {/* ---------MODE--EMPTY--------- */}
      {mode === EMPTY && (
        <Empty
          onAdd={onAdd}
        />
      )}

      {/* ---------MODE--ERROR--------- */}
      {mode === ERROR_DELETE && (
        <Error
          message="Could not CANCEL or DELETE Appointment."
          onClose={onCancel}
        />
      )}

      {mode === ERROR_SAVE && (
        <Error
          message="Could not CREATE or SAVE  Appointment."
          onClose={onCancel}
        />
      )}

      {/* ---------MODE--SAVING--------- */}
      {mode === SAVING && (
        <Status
          message="SAVING"
        />
      )}

      {/* ---------MODE--SHOW--------- */}
      {mode === SHOW && (
        <Show
          student={props.interview && props.interview.student}
          interviewer={props.interview && props.interview.interviewer.name}
          onSave={onSave}
          onEdit={() => transition(EDIT)}
          onDelete={() => transition(CONFIRM)}
        />
      )}

    </article >
  );
}