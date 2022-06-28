import {useState, useContext, createContext} from "react"
import useLocalStorage from "../hooks/useLocalStorage"

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
   
    Promise
      .all([
      fetch(`https://randomuser.me/api/?inc=name,email,phone,picture&nat=au,us,ca,nz&noinfo`),
      fetch(`https://powerful-stream-13617.herokuapp.com/http://itsthisforthat.com/api.php?json`)
    ])
      .then(responses => {
      return Promise.all(responses.map(res => res.json()))
    })
      .then(data => console.log(data))

  }

  createCandidate()
  return (
    <GenerateCandidate.Provider value={createCandidate}>
      <SaveLikedCandidates.Provider value="">
        {children}
      </SaveLikedCandidates.Provider>
    </GenerateCandidate.Provider>
  )
}

