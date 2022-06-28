import React from 'react'
import CandidateCard from './CandidateCard'
import useWindowSize from '../hooks/useWindowSize'

function CandidateCards() {
  const { width } = useWindowSize()
  
  const cardDisplayIncrement = 310

  let cardFlexAlignment;
  if(width * 0.8 < cardDisplayIncrement * 2) {
    cardFlexAlignment = {justifyContent: "center"}
  } else {
    cardFlexAlignment = {justifyContent: "space-between"}
  }
  

  return (
    <div className='candidate-cards' style={cardFlexAlignment}>
      <CandidateCard />
      {width * .8 >= cardDisplayIncrement * 2 && <CandidateCard />}
      {width * .8 >= cardDisplayIncrement * 3 && <CandidateCard />}
    </div>
  )
}

export default CandidateCards