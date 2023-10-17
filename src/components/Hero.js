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
            <div className = 'codeBox'>
            <div className="hardCoded">
            <p><span id="class">Class</span> <span id='classVar'>Developer</span> <span className='nestedBracket'>{`{`}</span></p>

            <p><span id='constructor'>constructor</span><span class="vars"> <span className='functionPurple'>{`(`}</span>name<span className='symbols'>,</span> age<span className='symbols'>,</span> skills</span><span className='functionPurple'>{`){`}</span></p>

            <p><span className='thisVar'>this</span><span className='symbols'>.</span>name <span className='symbols'>=</span> name<span className='symbols'>;</span></p>
            
            <p><span className='thisVar'>this</span><span className='symbols'>.</span>age <span className='symbols'>=</span> age<span className='symbols'>;</span></p>

            <p><span className='thisVar'>this</span><span className='symbols'>.</span>skills <span className='symbols'>=</span> skills<span className='symbols'>;</span></p>

            <p className = 'functionPurple'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`}`}</p>
            <p className="nestedBracket">{`}`}</p>

            <p><span className="thisVar">const</span> me <span className="symbols">=</span> <span className="thisVar">new</span> <span className="newDev">Developer</span><span className='nestedBracket'>{`(`}</span><span className='stringRed'>'Jesus Olaiz'</span><span className='symbols'>,</span> <span className="numberGreen">25</span><span className='symbols'>,</span> <span className='functionPurple'>{`[`}</span> {useTypingEffect(word, 125)} <span className='functionPurple'>{`]`}</span><span className='nestedBracket'>{`)`}</span></p>
            </div>
            
            
            
            </div>          
        </div>
    )


} 




export default Hero