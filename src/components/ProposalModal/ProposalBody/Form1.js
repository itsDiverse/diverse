import React from "react";

export const Form1 = ({
  onSubmit,
  goals,
  setGoals,
  advertise,
  setAdvertise
}) => (
  <div>
    <label>
      What are your goals?
      <select
        defaultValue={goals}
        onChange={event => setGoals(event.target.value)}
      >
        <option value="choose" disabled>
          choose
        </option>
        <option value="goal1">Goal 1</option>
        <option value="goal2">Goal 2</option>
      </select>
    </label>
    <label>
      Where do you advertise?
      <select
        defaultValue={advertise}
        onChange={event => setAdvertise(event.target.value)}
      >
        <option value="choose" disabled>
          choose
        </option>
        <option value="ad1">advertise 1</option>
        <option value="ad2">advertise 2</option>
      </select>
    </label>
    <button
      disabled={goals === "choose" || advertise === "choose"}
      onClick={onSubmit}
    >
      Continue
    </button>
  </div>
);
