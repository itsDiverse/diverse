import React, { useState } from "react"
import { Form1 } from "./Form1"
import { Form2 } from "./Form2"
import { Form3 } from "./Form3"
import { Form4 } from "./Form4"
import { Footer3 } from "../ProposalFooter/Footer3"
import { StyledProposalBody } from "../Proposal.styles"

export const ProposalBody = ({ step, setStep }) => {
  const [goals, setGoals] = useState("choose")
  const [advertise, setAdvertise] = useState("choose")

  const [ads, setAds] = useState("choose")
  const [spends, setSpends] = useState("choose")

  const [web, setWeb] = useState("")
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [number, setNumber] = useState("")

  return (
    <StyledProposalBody>
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
        <Form2
          ads={ads}
          setAds={setAds}
          spends={spends}
          setSpends={setSpends}
          onSubmit={() => setStep(3)}
        />
      )}
      {step === 3 && (
        <>
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
          <Footer3 />
        </>
      )}
      {step === 4 && <Form4 onSubmit={() => setStep(1)} />}
    </StyledProposalBody>
  )
}
