import React from 'react'
import CandidateCard from './CandidateCard'
import useWindowSize from '../hooks/useWindowSize'

function CandidateCards() {
  const { width } = useWindowSize()
  
  const cardDisplayIncrement = 310
  let maxContainerWidth = 0.8;

  let cardFlexAlignment;
  if(width * maxContainerWidth < cardDisplayIncrement * 2) {
    cardFlexAlignment = {justifyContent: "center"}
  } else {
    cardFlexAlignment = {justifyContent: "space-between"}
  }
  

  return (
    <div className='candidate-cards' style={cardFlexAlignment}>
      <CandidateCard />
      {width * maxContainerWidth >= cardDisplayIncrement * 2 && <CandidateCard />}
      {width * maxContainerWidth >= cardDisplayIncrement * 3 && <CandidateCard />}
    </div>
  )
}

export default CandidateCards