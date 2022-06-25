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

  return (
    <GenerateCandidate.Provider value={"hi"}>
      <SaveLikedCandidates.Provider value="">
        {children}
      </SaveLikedCandidates.Provider>
    </GenerateCandidate.Provider>
  )
}

