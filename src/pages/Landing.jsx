import React, { useEffect } from 'react'
import Hero from "../components/Hero"
import InfoBoxes from '../components/InfoBoxes'
import Candidates from '../components/Candidates'

function Landing() {
  
  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  return (
    <main id="landing">
      <Hero />
      <InfoBoxes />
      <Candidates />
    </main>
  )
}

export default Landing