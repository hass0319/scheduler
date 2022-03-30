import React from "react";
import classNames from "classnames";
import "components/DayListItem.scss"

export default function DayListItem(props) {
  // console.log(props)
  let dayClass = classNames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots === 0
  })
  return (
    <li className={dayClass} onClick={props.setDay} selected={props.selected}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpot(props.spots)}</h3>
    </li>
  );
}

function formatSpot(remainingSpots) {
  if (remainingSpots === 0) return remainingSpots = "no spots remaining";
  if (remainingSpots === 1) return remainingSpots = `${remainingSpots} spot remaining`;
  if (remainingSpots > 1) return `${remainingSpots} spots remaining`;
}