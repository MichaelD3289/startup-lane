import React, { useState } from "react";
import Button from "../components/Button";
import SavedCandidateCard from "../components/SavedCandidateCard";
import { useSaveLikedCandidates } from "../context/CandidateContext";
import Filter from "../components/Filter";
import Sort from "../components/Sort";

function Saved() {
  const {savedCandidates, removeAllCandidates} = useSaveLikedCandidates();
  const [sort, setSort] = useState({ field: "", order: "" });
  const [applyFilters, setApplyFilters] = useState(false)
  const [inputs, setInputs] = useState({
    costMin: "",
    costMax: "",
    timeMin: "",
    timeMax: "",
  });
  
  function handleInputChange({ target: { value, name } }) {
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function onFilterSubmit() {
    setApplyFilters(true)
  }
  
  const {costMin, costMax, timeMin, timeMax} = inputs

 
  return (
    <main className="saved">
      <div className="saved__fixed-container">
        <Sort change={setSort} />
        <Filter handleChange={handleInputChange} filterInputs={inputs} handleClick={onFilterSubmit} />
      </div>
      <div className="container saved__container">
        <div className="saved__header">
          <h1 className="saved__title">Saved Candidates</h1>
          <Button
            variant="solid"
            size="clamp(0.9rem, 1.75vw, 1.15rem)"
            onClick={removeAllCandidates}
            style={{marginBottom: applyFilters ? "1em" : "0"}}
          >
            Reject All
          </Button>
          {applyFilters && <p className="saved__clear-filters" onClick={() => {
            setApplyFilters(false)
            setInputs({
              costMin: "",
              costMax: "",
              timeMin: "",
              timeMax: "",
            })
          }}>clear filters</p>}
        </div>
        <section className="saved-cards">
          {sort.field === "" && savedCandidates
          .filter(card => {
            if(!applyFilters) return true

            let costTrue = true, timeTrue = true

            if(card.cost > +costMax) {
              costTrue = false
            }
            if(costMax === "" || +costMax === 0) {
              costTrue = true
            }
            if(card.cost < +costMin) {
              costTrue = false
            }

            if(card.maxTime > +timeMax) {
              timeTrue = false
            }
            if(timeMax === "" || +timeMax === 0) {
              timeTrue = true
            }
            if(card.minTime < +timeMin) {
              timeTrue = false
            }

            return costTrue && timeTrue
          })
            .map((saved) => (
              <SavedCandidateCard key={saved.name + saved.phone} {...saved} />
            ))}
              
          {sort.field !== "" && [].concat(savedCandidates)
            .filter(card => {
              if(!applyFilters) return true
  
              let costTrue = true, timeTrue = true
  
              if(card.cost > +costMax) {
                costTrue = false
              }
              if(costMax === "" || +costMax === 0) {
                costTrue = true
              }
              if(card.cost < +costMin) {
                costTrue = false
              }
  
              if(card.maxTime > +timeMax) {
                timeTrue = false
              }
              if(timeMax === "" || +timeMax === 0) {
                timeTrue = true
              }
              if(card.minTime < +timeMin) {
                timeTrue = false
              }
              
              return costTrue && timeTrue
            })
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
