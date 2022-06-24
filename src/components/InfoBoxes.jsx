import React from 'react'
import Button from "./Button"

function InfoBoxes() {
  return (
    <section class="info">
      <div className="container info__container">
        <div className="info__box">
          <h3 className="info__title">Efficient & Productive</h3>
          <p className="info__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, sed do eiusmod tempor incididunt ut labore ipsum dolor sit amet, consectetur adipiscing</p>
        </div>
        <img className="info__img" src="../../imgs/passion.jpg" alt="" />
        <div className="info__box">
          <h3 className="info__title">Save for Later</h3>
          <p className="info__text">Keep track of previously saved candidates and filter using criteria you care about. Our goal is to allow you to painlessly find the best startup for you!</p>
          <Button type="link" className="info__btn" variant="solid" color="accent" size="sm" to="/saved">Go To Saved</Button>
        </div>
      </div>
    </section>
  )
}

export default InfoBoxes