import { useState, useEffect, useRef } from 'react'


export default function useTypingEffect(text, keyStrokeTimeInMs)
{
    const [currentPosition, setCurrentPosition] = useState(0)
    const currentPositionRef = useRef(0);

   if(!text || text === undefined){
    text = 'Motivated'
   }


    useEffect(() => {
        const interval = setInterval(() => {

            setCurrentPosition((value) => value + 1)
            currentPositionRef.current += 1
            if(currentPositionRef > text.length){
                clearInterval(interval)
            }

        }, keyStrokeTimeInMs)

        return () => {
            clearInterval(interval)
            currentPositionRef.current = 0
            setCurrentPosition(0)
        }

    }, [keyStrokeTimeInMs, text])

    return text.substring(0, currentPosition)

} 