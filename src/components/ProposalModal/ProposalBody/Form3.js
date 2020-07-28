import React from "react";
export const Form3 = ({
  onSubmit,
  web,
  setWeb,
  name,
  setName,
  email,
  setEmail,
  number,
  setNumber
}) => (
  <div>
    <label>
      Web
      <input
        type="text"
        value={web}
        onChange={event => setWeb(event.target.value)}
      />
    </label>
    <label>
      Name
      <input
        type="text"
        value={name}
        onChange={event => setName(event.target.value)}
      />
    </label>
    <label>
      Email
      <input
        type="text"
        value={email}
        onChange={event => setEmail(event.target.value)}
      />
    </label>
    <label>
      Number
      <input
        type="text"
        value={number}
        onChange={event => setNumber(event.target.value)}
      />
    </label>
    <button onClick={onSubmit}>Send My Free Proposal</button>
  </div>
);
