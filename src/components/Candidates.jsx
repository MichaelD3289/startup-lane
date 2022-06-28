import React from "react";
import CandidateCards from "./CandidateCards";
import Button from "./Button";

function Candidates() {
  const [reset, setReset] = React.useState(false);

  return (
    <section id="candidates">
      <div className="container candidates__container">
        <h2 className="candidate__title accent-clr">Candidates</h2>
        {reset && <CandidateCards />}
        {!reset && <CandidateCards />}
        <Button
          variant="solid"
          color="accent"
          onClick={() => setReset((prev) => !prev)}
        >
          New Candidates
        </Button>
      </div>
    </section>
  );
}

export default Candidates;
