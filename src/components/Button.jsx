import React from "react";

import "components/Button.scss";
import classNames from "classnames";


export default function Button(props) {

   let buttonClass = classNames("button", {
      " button--confirm": props.confirm,
      " button--danger": props.danger
   })
   // if (props.confirm) {
   //    buttonClass += " button--confirm";
   //    // .add("Clickable", () => (<button onClick={action("button-clicked")}>Clickable</button>))
   // }
   // if (props.danger) {
   //    buttonClass += " button--danger";
   //    // .add("Disabled", () => (<button disabled onClick={action("button-clicked")}>Disabled</button>))
   // }
   return (
      <button
         className={buttonClass}
         onClick={props.onClick}
         disabled={props.disabled}
      >
         {props.children}
      </button>
   );
}
