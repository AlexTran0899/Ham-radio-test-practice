import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../UserContext";
import Speech from 'react-speech';
import './questions.css'

const style = {
    play: {
        button: {
            width: '28',
            height: '28',
            cursor: 'pointer',
            pointerEvents: 'none',
            outline: 'none',
            backgroundColor: 'yellow',
            border: 'solid 1px rgba(255,255,255,1)',
            borderRadius: 6
        },
    }

};


const Questions = () => {

    const { value } = useContext(UserContext)
    const [currentquestion, setcurrentquestion] = useState(0)
    const currentQuestionData = value?.subelement[0][currentquestion]
    const readText = `${currentQuestionData.question}
    'A'${currentQuestionData.A}
    'B'${currentQuestionData.B}
    'C'${currentQuestionData.C}
    'D'${currentQuestionData.D}`

    const [A, setA] = useState(null)
    const [B, setB] = useState(null)
    const [C, setC] = useState(null)
    const [D, setD] = useState(null)
    const nextQuestions = () => {
        setA(null)
        setB(null)
        setC(null)
        setD(null)
        setcurrentquestion(currentquestion + 1)
    }
    const previousQuestions = () => {
        setA(null)
        setB(null)
        setC(null)
        setD(null)
        setcurrentquestion(currentquestion - 1)
    }

    const checkAnswer = (answer) => {
        if (answer === currentQuestionData.correct_answer) {
            if (answer === 'A') {
                setA('green')
                setB('gray')
                setC('gray')
                setD('gray')
            }
            if (answer === 'B') {
                setA('gray')
                setB('green')
                setC('gray')
                setD('gray')
            }
            if (answer === 'C') {
                setA('gray')
                setB('gray')
                setC('green')
                setD('gray')
            }
            if (answer === 'D') {
                setA('gray')
                setB('gray')
                setC('gray')
                setD('green')
            }
        } else {
            if (answer === 'A') {
                setA('gray')
            }
            if (answer === 'B') {
                setB('gray')
            }
            if (answer === 'C') {
                setC('gray')
            }
            if (answer === 'D') {
                setD('gray')
            }

        }
    }
    useEffect(() => {
        var msg = new SpeechSynthesisUtterance();
        msg.text = readText;
        window.speechSynthesis.speak(msg);

    }, [currentquestion])



    return (
        <div className='questions'>
            <div>

                <h1>{currentQuestionData.question}</h1>
                {/* <Speech styles={style} text={readText} stop pause /> */}
                <button style={{ color: A }} onClick={() => checkAnswer('A')}>A.{currentQuestionData.A}</button>
                <br />
                <button style={{ color: B }} onClick={() => checkAnswer('B')}>B.{currentQuestionData.B}</button>
                <br />
                <button style={{ color: C }} onClick={() => checkAnswer('C')}>C.{currentQuestionData.C}</button>
                <br />
                <button style={{ color: D }} onClick={() => checkAnswer('D')}>D.{currentQuestionData.D}</button>
                <br />
                <div className='nav-button'>
                    <button onClick={previousQuestions}>back</button>
                    <button style={{ marginLeft: '20px' }} onClick={nextQuestions}>next</button>
                </div>
            </div>
        </div>
    );
};

export default Questions;