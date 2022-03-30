import React from "react";
import DayListItem from "./DayListItem.jsx"


export default function DayList(props) {
  let daysArr = props.days
  const loopAndPush = daysArr.map((el, i) => {
    // console.log("days", el)
    // console.log("el.id", el.id);
    // console.log("el.name", el.name);
    // console.log("props.day", props.day);//from main function in stories/index.js
    // console.log("i", i);//index of map
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