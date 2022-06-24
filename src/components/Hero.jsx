import React from 'react'
import Button from "./Button"

function Hero() {
  return (
    <section class="hero">
      <div className="container hero__container">
      <div className="hero__img"><img src="../../imgs/hero-img.jpg" alt="" /></div>

        <div className="hero__content">
          <h1 className="hero__title">Start looking for your <span className="primary-clr">next startup partner today</span></h1>
          <p className="hero__text">We have lists of candidates with great ideas looking for funding. Generate new candidates below and find your next venture!</p>
          <Button className="hero__btn" color="accent" type="link" to="#candidates" size="reg">View Candidates</Button>
        </div>
      </div>
    </section>
  )
}

export default Hero