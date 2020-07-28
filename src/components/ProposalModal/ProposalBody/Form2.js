import React from "react";

export const Form2 = ({ onSubmit }) => (
  <div>
    <label>
      otro
      <input type="text" />
    </label>
    <label>
      another
      <input type="text" />
    </label>
    <button onClick={onSubmit}>Last Step</button>
  </div>
);
