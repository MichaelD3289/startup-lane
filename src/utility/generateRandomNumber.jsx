import React from 'react'

function generateRandomNumber(min = 1, max = 10, decimal = 2) {
  let random = Math.floor(Math.random() * (max - min + 1) + min)
  
  if(decimal > 0) {
    let randomDecimal = +Math.random().toFixed(decimal);
    random += randomDecimal
  }
  return random
}

export default generateRandomNumber