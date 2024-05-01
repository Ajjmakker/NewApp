import React from "react";

function Button({ label, onClick }) {
  return <Button onClick={onClick}>{label}</Button>;
}
export default Button;
