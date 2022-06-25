import React, { useState } from "react";
import Button from "./Button";

function CandidateCard() {
  const [isContactInfo, setIsContactInfo] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isRejected, setisRejected] = useState(false);

  return (
    <div
      className="card"
      style={{ backgroundColor: isContactInfo ? "#F3FCF0" : "#FFF" }}
    >
      <img
        className="card__img"
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        alt=""
      />
      {isContactInfo ? (
        <>
          <h3 className="card__name">
            Firstly <span className="primary-clr">Lastly</span>
          </h3>
          <h3 className="card__email">
            email<span className="primary-clr">@</span>email.com
          </h3>
          <h3 className="card__phone">
            123-456-<span className="primary-clr">7890</span>
          </h3>
        </>
      ) : (
        <>
          <h3 className="card__idea">
            Its like a{" "}
            <span className="primary-clr card__accent">Ponzi Scheme</span> for{" "}
            <span className="primary-clr card__accent">Your Aquarium</span>
          </h3>
          <h3 className="card__cost">
            Cost: <span className="primary-clr card__accent">1.25</span> million
          </h3>
          <h3 className="card__time">
            Completion Time:{" "}
            <span className="primary-clr card__accent">6-8</span> months
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
            }}
          >
            {isLiked ? "unLike" : "Like"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CandidateCard;
