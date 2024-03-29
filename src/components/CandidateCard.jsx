import React, { useState, useEffect } from "react";
import Button from "./Button";
import { useGenerateCandidate } from "../context/CandidateContext";

function CandidateCard() {
  const [isContactInfo, setIsContactInfo] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isRejected, setisRejected] = useState(false);
  const {createCandidate, likeCandidate, removeCandidate} = useGenerateCandidate()
  const [candidate, setCandidate] = useState({ cost: NaN,
    email: "",
    maxTime: NaN,
    minTime: NaN,
    name: {first: "", last: ""},
    phone: "",
    picture: {large: ""},
    that: "",
    "this": ""})

  async function getNewCandidate() {
    setCandidate({ cost: NaN,
      email: "",
      maxTime: NaN,
      minTime: NaN,
      name: {first: "", last: ""},
      phone: "",
      picture: {large: ""},
      that: "",
      "this": ""})
    setCandidate(await createCandidate())
  }

  useEffect(() => {
    getNewCandidate() 
  }, [])

  useEffect(() => {

    if(isRejected) {
      getNewCandidate()
      setisRejected(false)
    }
    if(isLiked) {
      getNewCandidate()
      setIsLiked(false)
    }
  }, [isRejected, isLiked])

  const {
    cost,
    email,
    maxTime,
    minTime,
    name: {first, last},
    phone,
    picture: {large},
    that,
    this: _this
  } = candidate

  let firstLetterVowel = false
  switch(_this[0]?.toLowerCase()) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
      firstLetterVowel = true;
      break;
  }

  return (
    <div
      className="card"
      style={{ backgroundColor: isContactInfo ? "#F3FCF0" : "#FFF" }}
    >
      <img
        className="card__img"
        src={large}
        alt=""
      />
      {isContactInfo ? (
        <>
          <h3 className="card__name">
            {first} <span className="primary-clr">{last}</span>
          </h3>
          <h3 className="card__email">
            {email.split('@')[0]}<span className="primary-clr">@</span>{email.split('@')[1]}
          </h3>
          <h3 className="card__phone">
            {phone.split('-')[0]}-{phone.split('-')[1]}-<span className="primary-clr">{phone.split('-')[2]}</span>
          </h3>
        </>
      ) : (
        <>
          <h3 className="card__idea">
            Its like {firstLetterVowel ? "an" : "a"} 
            <span className="primary-clr card__accent"> {_this}</span> for <br />
            <span className="primary-clr card__accent"> {that}</span>
          </h3>
          <h3 className="card__cost">
            Cost: <span className="primary-clr card__accent"> {cost?.toFixed(2)}</span> million
          </h3>
          <h3 className="card__time">
            Time: 
            <span className="primary-clr card__accent"> {minTime}-{maxTime}</span> months
          </h3>
        </>
      )}
      <div className="card__button-container">
        <Button
          size="sm"
          variant={isContactInfo ? "solid" : "outline"}
          color="secondary"
          style={{ width: "100%", marginBottom: "1em" }}
          onClick={() => {
            setIsContactInfo((prev) => !prev);
          }}
        >
          {isContactInfo ? "Idea" : "Contact"} Info
        </Button>
        <div>
          <Button
            size="sm"
            color="primary"
            variant={isRejected ? "solid" : "outline"}
            style={{ width: "47.5%", marginRight: "5%" }}
            onClick={() => {
              setisRejected((prev) => !prev);
              setIsLiked(false)
              removeCandidate(email)
            }}
          >
            {isRejected ? "Rejected" : "Reject"}
          </Button>
          <Button
            size="sm"
            variant={isLiked ? "solid" : "outline"}
            color="accent"
            style={{ width: "47.5%" }}
            onClick={() => {
              setIsLiked((prev) => !prev);
              setisRejected(false);
              if (!isLiked) {
                likeCandidate(candidate)
              } else {
                removeCandidate(email)
              }

            }}
          >
            {isLiked ? "unLike" : "Like"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default React.memo(CandidateCard);