import { useState, useEffect, useContext } from 'react'
import { ThemeContext } from '../Context/Context'

export function useFetch(url) {
  const [data, setData] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!url) return

    setIsLoading(true)

    async function fetchData() {
      try {
        const response = await fetch(url)
        const data = await response.json()
        setData(data)
      } catch (error) {
        console.log(error)
        setError(true)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [url])

  return { isLoading, data, error }
}

export function useTheme() {
  const { toggleTheme, theme } = useContext(ThemeContext)
  return { toggleTheme, theme }
}
