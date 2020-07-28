import React, { useState } from "react";
import { Form1 } from "./Form1";
import { Form2 } from "./Form2";
import { Form3 } from "./Form3";

export const ProposalBody = ({ step, setStep }) => {
  const [goals, setGoals] = useState("choose");
  const [advertise, setAdvertise] = useState("choose");

  const [ads, setAds] = useState("choose");
  const [spends, setSpends] = useState("choose");

  const [web, setWeb] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  return (
    <div>
      {step === 1 && (
        <Form1
          goals={goals}
          setGoals={setGoals}
          advertise={advertise}
          setAdvertise={setAdvertise}
          onSubmit={() => setStep(2)}
        />
      )}
      {step === 2 && (
        <Form2 ads={ads} setAds={setAds} onSubmit={() => setStep(3)} />
      )}
      {step === 3 && (
        <Form3
          web={web}
          setWeb={setWeb}
          email={email}
          setEmail={setEmail}
          name={name}
          setName={setName}
          number={number}
          setNumber={setNumber}
          onSubmit={() => setStep(4)}
        />
      )}
      {step === 4 && (
        <div>
          final form{" "}
          <button onClick={() => setStep(1)}>empezar de nuevo</button>
        </div>
      )}

      <div>form 1:</div>
      <div>{goals}</div>
      <div>{advertise}</div>
      <hr />
      <div>form 2:</div>
      <div>{ads}</div>
      <div>{spends}</div>
      <hr />
      <div>form 3:</div>
      <div>{web}</div>
      <div>{email}</div>
      <div>{name}</div>
      <div>{number}</div>
    </div>
  );
};
