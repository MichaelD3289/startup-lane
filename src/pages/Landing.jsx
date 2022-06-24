import React from 'react'
import Hero from "../components/Hero"
import InfoBoxes from '../components/InfoBoxes'
import Candidates from '../components/Candidates'

function Landing() {
  return (
    <main id="landing">
      <Hero />
      <InfoBoxes />
      <Candidates />
    </main>
  )
}

export default Landing