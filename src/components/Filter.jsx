import React, { useState } from "react";
import Button from "./Button";

function Filter() {
  const [showFilter, setShowFilter] = useState(false)
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

  const { costMin, costMax, timeMin, timeMax } = inputs;
  return (
    <div className={`filter ${showFilter ? "filter--show" : ""}`}>
      <Button
        variant={showFilter ? "outline" : "solid"}
        color="secondary"
        size="sm"
        className="filter__button"
        style={{width: "120px", height: "2.25em", padding: "0"}}
        onClick={() => setShowFilter(prev => !prev)}
      >
        {showFilter ? "Submit" : "Filter"}
      </Button>
      <div className="filter__cost">
        <h3 className="filter__cost-title primary-clr">Cost</h3>
        <div className="filter__input-container">
          <input
            className="filter__input"
            type="number"
            min="0"
            name="costMin"
            id="costMin"
            placeholder="min"
            onChange={handleInputChange}
            value={costMin}
          />
          <p className="filter__input-unit">million</p>
        </div>
        <div className="filter__input-container">
          <input
            className="filter__input"
            type="number"
            min="0"
            name="costMax"
            id="costMax"
            placeholder="max"
            onChange={handleInputChange}
            value={costMax}
            
          />
          <p className="filter__input-unit">million</p>
        </div>
      </div>
      <div className="filter__time">
        <h3 className="filter__time-title primary-clr">Time</h3>
        <div className="filter__input-container">
          <input
            className="filter__input"
            type="number"
            min="0"
            name="timeMin"
            id="timeMin"
            placeholder="min"
            onChange={handleInputChange}
            value={timeMin}
          />
          <p className="filter__input-unit">months</p>
        </div>
        <div className="filter__input-container">
          <input
            className="filter__input"
            type="number"
            min="0"
            name="timeMax"
            id="timeMax"
            placeholder="max"
            onChange={handleInputChange}
            value={timeMax}
          />
          <p className="filter__input-unit">months</p>
        </div>
      </div>
    </div>
  );
}

export default Filter;
