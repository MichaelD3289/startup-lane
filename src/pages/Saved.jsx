import React, { useState } from "react";
import Button from "../components/Button";
import SavedCandidateCard from "../components/SavedCandidateCard";
import { useSaveLikedCandidates } from "../context/CandidateContext";
import Filter from "../components/Filter";
import Sort from "../components/Sort";

function Saved() {
  const {savedCandidates, removeAllCandidates} = useSaveLikedCandidates();
  const [sort, setSort] = useState({ field: "", order: "" });
  
  return (
    <main className="saved">
      <div className="saved__fixed-container">
        <Sort sort={sort} change={setSort} />
        <Filter />
      </div>
      <div className="container saved__container">
        <div className="saved__header">
          <h1 className="saved__title">Saved Candidates</h1>
          <Button
            variant="solid"
            size="clamp(0.9rem, 1.75vw, 1.15rem)"
            onClick={removeAllCandidates}
          >
            Reject All
          </Button>
        </div>
        <section className="saved-cards">
          {sort.field === "" && savedCandidates
            .map((saved) => (
              <SavedCandidateCard key={saved.name + saved.phone} {...saved} />
            ))}
              
          {sort.field !== "" && [].concat(savedCandidates)
            .sort((a, b) => {
              if (sort.order === "a") {
                return a[sort.field] - b[sort.field];
              } else {
                return b[sort.field] - a[sort.field];
              }
            })
            .map((saved) => (
              <SavedCandidateCard key={saved.name + saved.phone} {...saved} />
            ))}
        </section>
      </div>
    </main>
  );
}

export default Saved;
