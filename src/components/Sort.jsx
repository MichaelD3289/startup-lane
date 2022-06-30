import React, { useState } from "react";
import Button from "./Button";
import sortOptions from "../data/sortOptions.json";

function Sort({ change }) {
  const [showSort, setShowSort] = useState(false);
  const [options, setOptions] = useState(
    sortOptions.map((option) => ({ ...option, active: false }))
  );

  function setActive({ target: { id } }) {
    setOptions((options) => {
      return options.map((o) => {
        if (o.active && o.name === id) {
          change({ field: "", order: "" });
          return { ...o, active: false };
        }
        if (o.name === id) {
          if (id.split("-")[0] === "least") {
            change({ field: o.field, order: "a" });
          } else {
            change({ field: o.field, order: "b" });
          }
          return { ...o, active: true };
        }
        return { ...o, active: false };
      });
    });
  }

  return (
    <div className={`sort ${showSort ? "sort--show" : ""}`}>
      {!showSort && (
        <Button
          color="secondary"
          size="sm"
          className={`sort__button ${showSort ? "sort__button--show" : ""}`}
          style={{ width: "120px", height: "2.25em", padding: "0" }}
          onClick={() => setShowSort((prev) => !prev)}
        >
          Sort &#9660;
        </Button>
      )}
      {showSort && (
        <Button
          color="secondary"
          size="sm"
          className={`sort__button ${showSort ? "sort__button--show" : ""}`}
          style={{ width: "120px", height: "2.25em", padding: "0" }}
          onClick={() => setShowSort((prev) => !prev)}
        >
          Sort &#9650;
        </Button>
      )}
      <div
        className={`sort__selections ${
          showSort ? "sort__selections--show" : ""
        }`}
      >
        {options.map((option) => (
          <p
            key={option.name}
            className={`sort__selection${
              option.active ? " sort__selection--active" : ""
            }`}
            id={option.name}
            onClick={setActive}
          >
            <span className={option.accentClr}>{option.textOne}</span>{" "}
            {option.textTwo}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Sort;
