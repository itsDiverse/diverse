import React from "react";
import { ProposalHeader } from "./ProposalHeader";
import { ProposalBody } from "./ProposalBody";

export const Proposal = () => {
  const [step, setStep] = React.useState(1);
  return (
    <div>
      <ProposalHeader step={step} />
      <ProposalBody step={step} setStep={setStep} />
    </div>
  );
};
