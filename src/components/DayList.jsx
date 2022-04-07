import React from "react";
import DayListItem from "./DayListItem.jsx"

// DayList is responsible for rendering a list of DayListItem components.
export default function DayList(props) {
  let daysArr = props.days
  //Maping over the days array to return the DayListItem components as children
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