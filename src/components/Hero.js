import {useState, useEffect} from 'react'
import useTypingEffect from '../hooks/typing-effect'

const buzzWords = ['Innovative', 'Responsive', 'Detail-Oriented', 'Versatile', 'Collaborative', 'Results-Driven']



const Hero = (props) => {
    const [word, setWord] = useState('Motivated')
    const [count, setCount] = useState(0)

    
    
    
    useEffect(() => {
        const interval = setInterval(() => {
            if(count > (buzzWords.length - 1)){
                setCount(0)
                setWord(buzzWords[count])
            }
            setWord(buzzWords[count])
            setCount(count => count + 1)

            
            
        }, 3000)
        if(count > buzzWords.length ){
            setCount(0)
        }

        

    }, [count])
    
    

    return (
        <div className='hero'>
            <div>
            <p>{`Class Developer {`}</p>
            <p>{`constructor(name, age, skills){`}</p>
            <p>{`this.name = name;`}</p>
            <p>{`this.age = age;`}</p>
            <p>{`this.skills = skills;`}</p>
            <p>{`}`}</p>
            <p>{`}`}</p>
            <p></p>
            <p>{`const jesusOlaiz = new Developer('Jesus Olaiz', 25, ${useTypingEffect(word, 125)} )`}</p>
            </div>          
            <h1>{}</h1>
        </div>
    )


} 




export default Hero