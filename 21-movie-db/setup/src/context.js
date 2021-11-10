import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = `https://www.omdbapi.com/?t=`
const API_KEY = '&apikey=a88726d6'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('matrix reloaded')
  const [movie, setMovie] = useState([]);

  const fetchMovie = useCallback(async () => {
    setLoading(true)
    try {
      const response = await fetch(`${url}${searchTerm}${API_KEY}`)
      const data = await response.json()
      if(data) {
        setMovie(data)
      } else {
        setMovie([])
      }
      setLoading(false)
    } catch(error) {
      console.log(error)
      setLoading(false)
    }
  },[searchTerm])
  useEffect(() => {
    fetchMovie()
  },[searchTerm, fetchMovie])


  return (
    <AppContext.Provider
    value={{loading, searchTerm, setSearchTerm, movie}}>
    {children}
    </AppContext.Provider>
  )
}
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
