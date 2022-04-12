import {useState, useEffect} from 'react'

export default function useScrollX() {
  const [state, setState] = useState(0)
 
  useEffect(() => {
    window.addEventListener("scroll", (event) => {
      setState(window.pageYOffset)
    });

  }, [state])
 
  return state
}