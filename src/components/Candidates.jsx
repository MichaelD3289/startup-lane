import React from "react";
import CandidateCards from "./CandidateCards";
import Button from "./Button";

function Candidates() {
  return (
    <section id="candidates">
      <div className="container candidates__container">
        <h2 className="candidate__title accent-clr">Candidates</h2>
        <CandidateCards />
        <Button variant="solid" color="accent">
          New Candidates
        </Button>
      </div>
    </section>
  );
}

export default Candidates;
