import React,{useState, useEffect} from 'react'


const useMousePosition = () => {
    const [position,setPosition] = useState({x: 0, y: 0})
  
  
    useEffect(() => {
      const MouseMove = (e) => {
        setPosition({
          x : e.pageX,
          y: e.pageY
        })
      }
  
      document.addEventListener('mousemove', MouseMove)
  
  return () => {
    document.removeEventListener('mousemove', MouseMove)
  }
  
    }, [])
  
   return position
  }

  export default useMousePosition;