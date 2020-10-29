import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Button(props) {
  const buttonClasses = props.buttonClasses;
  const iconObject = props.iconObject;
  const content = props.content;
  return (
    <div>
      <button id="clear" className={buttonClasses}>
        <FontAwesomeIcon icon={iconObject} /> {content}
      </button>
    </div>
  );
}

export default Button;
