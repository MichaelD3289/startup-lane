import {useState, useContext, createContext} from "react"
import useLocalStorage from "../hooks/useLocalStorage"
import generateRandomNumber from "../utility/generateRandomNumber"

const GenerateCandidate = createContext()
const SaveLikedCandidates = createContext()

export function useGenerateCandidate() {
  return useContext(GenerateCandidate)
}

export function useSaveLikedCandidates() {
  return useContext(SaveLikedCandidates)
}

export default function CandidateContextProvider({ children }) {

  const [candidates, setCandidates] = useState([])

  async function createCandidate() {
   let candidate = await Promise
      .all([
      fetch(`https://randomuser.me/api/?inc=name,email,phone,picture&nat=au,us,ca,nz&noinfo`),
      fetch(`https://powerful-stream-13617.herokuapp.com/http://itsthisforthat.com/api.php?json`)
    ])
      .then(responses => {
      return Promise.all(responses.map(res => res.json()))
    })
      .then(data => Object.assign({}, data[0].results[0], data[1]))

      const cost = generateRandomNumber()
      const minTime = generateRandomNumber(4, 24, 0)
      const maxTime = generateRandomNumber(minTime + 1, Math.ceil(minTime * 1.25), 0)

     candidate = Object.assign(candidate, {
        cost,
        minTime,
        maxTime
      })
    
      return candidate

  }

  createCandidate()
  return (
    <GenerateCandidate.Provider value={{createCandidate}}>
      <SaveLikedCandidates.Provider value="">
        {children}
      </SaveLikedCandidates.Provider>
    </GenerateCandidate.Provider>
  )
}

