import React from "react";
import Button from "@mui/material/Button";

const ReusableButton = (props) => {
  return (
    <Button size={props.size} onClick={props.onClick}>
      {props.buttonText}
    </Button>
  );
};
export default ReusableButton;
