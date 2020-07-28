import React from "react";

export const ProposalHeader = ({ step }) => (
  <div>
    {step === 1 && <div>icons 1</div>}
    {step === 2 && <div>icons 2</div>}
    {step === 3 && <div>icons 3</div>}
  </div>
);
