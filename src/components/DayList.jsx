import React from "react";
import DayListItem from "./DayListItem.jsx"


export default function DayList(props) {
  let daysArr = props.days
  const loopAndPush = daysArr.map((el, i) => {
    return (
      <DayListItem
        key={el.id}
        name={el.name}
        spots={el.spots}
        selected={el.name === props.value}
        setDay={(event) => props.setDay(el.name)
        }
      ></DayListItem >
    );
  });

  return <ul>{loopAndPush}</ul>;
}