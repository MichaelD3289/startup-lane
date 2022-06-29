import React, { useState } from "react";
import Button from "./Button";
import useWindowSize from "../hooks/useWindowSize";

function SavedCandidateCard({
  cost,
  email,
  maxTime,
  minTime,
  name: { first, last },
  phone,
  picture: { large },
  that,
  this: _this,
}) {
  const [isContactInfo, setIsContactInfo] = useState(false);
  const { width } = useWindowSize();

  let firstLetterVowel = false;
  switch (_this[0]?.toLowerCase()) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
      firstLetterVowel = true;
      break;
  }

  return (
    <div className={`saved-card${isContactInfo ? " saved-card-bg" : ""}`}>
      <div className="reject-x">
      &#10006;
      </div>
      <div className="saved-card__img-container">
        <img src={large} alt="" className="saved-card__img" />
        {width >= 600 && width < 1000 && (
          <Button
            size="sm"
            variant={isContactInfo ? "solid" : "outline"}
            color="secondary"
            style={{ width: "100%", marginBottom: "1em" }}
            onClick={() => {
              setIsContactInfo((prev) => !prev);
            }}
            className="saved-card__btn"
          >
            {isContactInfo ? "Idea" : "Contact"} Info
          </Button>
        )}
      </div>
      <div
        className={`saved-card__contact-info${!isContactInfo ? " saved-card__contact-info--hidden" : ""}`}
      >
        <h3 className="card__name">
          {first} <span className="primary-clr">{last}</span>
        </h3>
        <h3 className="card__email">
          {email.split("@")[0]}
          <span className="primary-clr">@</span>
          {email.split("@")[1]}
        </h3>
        <h3 className="card__phone card__phone--saved">
          {phone.split("-")[0]}-{phone.split("-")[1]}-
          <span className="primary-clr">{phone.split("-")[2]}</span>
        </h3>
      </div>
      <div
        className={`saved-card__idea-info${isContactInfo ? " saved-card__idea-info--hidden" : ""}`}
        
      >
        <h3 className="card__idea">
          Its like {firstLetterVowel ? "an" : "a"}
          <span className="primary-clr card__accent"> {_this}</span> for
          <span className="primary-clr card__accent"> {that}</span>
        </h3>
        <h3 className="card__cost">
          Cost:{" "}
          <span className="primary-clr card__accent"> {cost?.toFixed(2)}</span>{" "}
          million
        </h3>
        <h3 className="card__time card__time--saved">
          Time:
          <span className="primary-clr card__accent">
            {" "}
            {minTime}-{maxTime}
          </span>{" "}
          months
        </h3>
      </div>
      {width < 600 && (
        <Button
          size="sm"
          variant={isContactInfo ? "solid" : "outline"}
          color="secondary"
          style={{ width: "100%", marginBottom: "1em" }}
          onClick={() => {
            setIsContactInfo((prev) => !prev);
          }}
          className="saved-card__btn"
        >
          {isContactInfo ? "Idea" : "Contact"} Info
        </Button>
      )}
    </div>
  );
}

export default SavedCandidateCard;
