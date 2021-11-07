import React, { useState, useEffect } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import './eachClass.css'

const EachClass = (props) => {
    const { push } = useHistory();
    const current = window.location.pathname.slice(1,)
    const [data, setData] = useState(null)
    const redirectToSubelement = (subelement) => {
        window.localStorage.setItem('questions', JSON.stringify(subelement))
        window.localStorage.setItem('currentQuestion', 0)
        push('/questions')
    }
    useEffect(() => {
        const storedData = JSON.parse(window.localStorage.getItem(props.class))
        if (props.class != null && !storedData) {
            axios.get(`${process.env.REACT_APP_API_URI}/api/questions/${props.class}`)
                .then(data => window.localStorage.setItem(props.class, JSON.stringify(data.data), setData(data.data)))
        } else {
            setData(storedData)
        }
    }, [props])
    return (
        <div>
            <h1 className='classTitle'>{current}</h1>
            <div className='eachClass'>
                {data?.map(each =>
                    <h1 onClick={() => redirectToSubelement(each)} className='subelement'>{each.subelement_Title}</h1>
                )}
            </div>
        </div>
    );
};

export default EachClass;