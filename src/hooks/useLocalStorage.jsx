import React, {useEffect, useState} from 'react'

function useLocalStorage(key, startingValue) {
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(key)
    if(jsonValue != null) return JSON.parse(jsonValue)

    return startingValue
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}

export default useLocalStorage

