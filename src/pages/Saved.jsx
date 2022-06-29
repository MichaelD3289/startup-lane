import React from "react";
import Button from "../components/Button";
import SavedCandidateCard from "../components/SavedCandidateCard";
import { useSaveLikedCandidates } from "../context/CandidateContext";

function Saved() {
  const savedCandidates = useSaveLikedCandidates();

  return (
    <main className="saved">
      <div className="container saved__container">
        <div className="saved__header">
          <h1 className="saved__title">Saved Candidates</h1>
          <Button
            variant="solid"
            size="clamp(0.9rem, 1.75vw, 1.15rem)"
            onClick={() => console.log("clicked")}
          >
            Reject All
          </Button>
        </div>
        <section className="saved-cards">
          {savedCandidates.map(saved => (
            <SavedCandidateCard {...saved} />
          ))}
        </section>
      </div>
    </main>
  );
}

export default Saved;
