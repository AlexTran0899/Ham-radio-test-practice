import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import './questions.css'
import { Switch } from 'antd';

const Questions = () => {
    const { push } = useHistory();
    const value = JSON.parse(window.localStorage.getItem('questions'))
    const [nextButtonState, setNextButtonState] = useState(false)
    const [textToSpeechSetting, setTextToSpeechSetting] = useState(false)
    const localStorageCurrentQuestions = window.localStorage.getItem('currentQuestion') / 1
    const [currentquestion, setcurrentquestion] = useState(0)
    const currentQuestionData = value?.subelement[0][currentquestion]
    const readText = `${currentQuestionData?.question}
    'A'${currentQuestionData?.A}
    'B'${currentQuestionData?.B}
    'C'${currentQuestionData?.C}
    'D'${currentQuestionData?.D}`
    const correctStyle = { backgroundColor: '#7dff86' }
    const incorrectStyle = { color: 'gray', backgroundColor: '#f2f2f2' }
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
        setNextButtonState(false)
    }
    const checkAnswer = (answer) => {
        if (answer === currentQuestionData.correct_answer) {
            window.speechSynthesis.cancel();
            setNextButtonState(true)

            if (answer === 'A') {
                setA(correctStyle)
                setB(incorrectStyle)
                setC(incorrectStyle)
                setD(incorrectStyle)
            }
            if (answer === 'B') {
                setA(incorrectStyle)
                setB(correctStyle)
                setC(incorrectStyle)
                setD(incorrectStyle)
            }
            if (answer === 'C') {
                setA(incorrectStyle)
                setB(incorrectStyle)
                setC(correctStyle)
                setD(incorrectStyle)
            }
            if (answer === 'D') {
                setA(incorrectStyle)
                setB(incorrectStyle)
                setC(incorrectStyle)
                setD(correctStyle)
            }
        } else {
            if (answer === 'A') {
                setA(incorrectStyle)
            }
            if (answer === 'B') {
                setB(incorrectStyle)
            }
            if (answer === 'C') {
                setC(incorrectStyle)
            }
            if (answer === 'D') {
                setD(incorrectStyle)
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

    }, [currentquestion,textToSpeechSetting])

    return (

        <div className='questions'>
            {currentQuestionData &&

                <div>
                    <div className='switch'>
                        <p>Read question: </p>
                        <Switch onChange={onChange} style={{ width: '20px' }} />
                    </div>
                    <div className='answerButton'>

                        <h1>{currentQuestionData.question}</h1>
                        <button style={A} onClick={() => checkAnswer('A')}>A. {currentQuestionData.A}</button>
                        <br />
                        <button style={B} onClick={() => checkAnswer('B')}>B. {currentQuestionData.B}</button>
                        <br />
                        <button style={C} onClick={() => checkAnswer('C')}>C. {currentQuestionData.C}</button>
                        <br />
                        <button style={D} onClick={() => checkAnswer('D')}>D. {currentQuestionData.D}</button>
                        <br />
                    </div>
                    <div className='nav-button'>
                        {nextButtonState && <button onClick={nextQuestions}>next</button>}
                    </div>
                </div>
            }
        </div>
    );
};

export default Questions;