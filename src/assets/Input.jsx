import React from "react";

function Input({ label, value, onChange }) {
  return (
    <div>
      <label>{label}:</label>
      <input type="text" value={value} onChange={onСhange} />
    </div>
  );
}
export default Input;
