import React, { useContext, useState } from "react";
import { UserContext } from "../UserContext";

const Questions = () => {
    const { value } = useContext(UserContext)
    const [currentquestion,setcurrentquestion] = useState(0)
    const currentQuestionData = value?.subelement[0][currentquestion]
    const [A,setA] = useState(null)
    const [B,setB] = useState(null)
    const [C,setC] = useState(null)
    const [D,setD] = useState(null)
    const nextQuestions = ()=> {
        setA(null)
        setB(null)
        setC(null)
        setD(null)
        setcurrentquestion(currentquestion + 1)
    }
    const previousQuestions = ()=> {
        setA(null)
        setB(null)
        setC(null)
        setD(null)
        setcurrentquestion(currentquestion - 1)
    }

    const checkAnswer = (answer)=>{
        if(answer === currentQuestionData.correct_answer){
            if (answer === 'A'){
                setA('green')
            }
            if (answer === 'B'){
                setB('green')
            }
            if (answer === 'C'){
                setC('green')
            }
            if (answer === 'D'){
                setD('green')
            }  
        }else{
            
        }
    }
    
    return (
        <div className='Questions'>
                <div>
                    <h1>{currentQuestionData.question}</h1>
                    <button style={{color:A}}onClick={()=> checkAnswer('A')}>{currentQuestionData.A}</button>
                    <br />
                    <button style={{color:B}} onClick={()=> checkAnswer('B')}>{currentQuestionData.B}</button>
                    <br />
                    <button style={{color:C}} onClick={()=> checkAnswer('C')}>{currentQuestionData.C}</button>
                    <br />
                    <button style={{color:D}} onClick={()=> checkAnswer('D')}>{currentQuestionData.D}</button>
                    <br/>
                    <button onClick={previousQuestions}>back</button>
                    <button onClick={nextQuestions}>next</button>

                </div>
        </div>
    );
};

export default Questions;