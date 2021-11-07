import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import './questions.css'
import { Switch } from 'antd';

const Questions = () => {
    const { push } = useHistory();
    const value = JSON.parse(window.localStorage.getItem('questions'))
    const [textToSpeechSetting, setTextToSpeechSetting] = useState(false)
    const localStorageCurrentQuestions = window.localStorage.getItem('currentQuestion') / 1
    const [currentquestion, setcurrentquestion] = useState(0)
    const currentQuestionData = value?.subelement[0][currentquestion]
    const readText = `${currentQuestionData?.question}
    'A'${currentQuestionData?.A}
    'B'${currentQuestionData?.B}
    'C'${currentQuestionData?.C}
    'D'${currentQuestionData?.D}`
    const [A, setA] = useState(null)
    const [B, setB] = useState(null)
    const [C, setC] = useState(null)
    const [D, setD] = useState(null)
    
    if (!value) {
        push('/')
    }
    const nextQuestions = () => {
        setA(null)
        setB(null)
        setC(null)
        setD(null)
        setcurrentquestion(currentquestion + 1)
        window.localStorage.setItem('currentQuestion', currentquestion + 1)
    }
    const previousQuestions = () => {
        setA(null)
        setB(null)
        setC(null)
        setD(null)
        setcurrentquestion(currentquestion - 1)
        window.localStorage.setItem('currentQuestion', currentquestion - 1)
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
    const onChange = () => {
        setTextToSpeechSetting(!textToSpeechSetting)
    }
    useEffect(() => {
        if (localStorageCurrentQuestions) {
            setcurrentquestion(localStorageCurrentQuestions / 1)
        } else {
            window.localStorage.setItem('currentQuestion', 0)
        }
    }, [])
    useEffect(() => {
        window.speechSynthesis.cancel();
        if (textToSpeechSetting) {
            var msg = new SpeechSynthesisUtterance();
            msg.text = readText;
            window.speechSynthesis.speak(msg);
        }

    }, [textToSpeechSetting, currentquestion])

    return (

        <div className='questions'>
            {currentQuestionData &&

                <div>
                    <div className='switch'>
                        <p>Read question: </p>
                        <Switch onChange={onChange} style={{ width: '20px' }} />
                    </div>
                    <h1>{currentQuestionData.question}</h1>
                    <button style={{ color: A }} onClick={() => checkAnswer('A')}>A. {currentQuestionData.A}</button>
                    <br />
                    <button style={{ color: B }} onClick={() => checkAnswer('B')}>B. {currentQuestionData.B}</button>
                    <br />
                    <button style={{ color: C }} onClick={() => checkAnswer('C')}>C. {currentQuestionData.C}</button>
                    <br />
                    <button style={{ color: D }} onClick={() => checkAnswer('D')}>D. {currentQuestionData.D}</button>
                    <br />
                    <div className='nav-button'>
                        <button onClick={previousQuestions}>back</button>
                        <button style={{ marginLeft: '20px' }} onClick={nextQuestions}>next</button>
                    </div>
                </div>
            }
        </div>
    );
};

export default Questions;