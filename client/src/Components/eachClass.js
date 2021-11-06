import React, { useState, useEffect, useContext } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import './eachClass.css'
import { UserContext } from "../UserContext";

const EachClass = (props) => {
    const { push } = useHistory();
    const [data, setData] = useState(null)
    const { value, setValue } = useContext(UserContext)
    const redirectToSubelement = (subelement) => {
        setValue(subelement)
        push('/questions')
    }
    useEffect(() => {
        const storedData = JSON.parse(window.localStorage.getItem(props.class))
        if (props.class != null && !storedData) {
            axios.get(`${process.env.REACT_APP_API_URI}/api/questions/${props.class}`)
                .then(data => window.localStorage.setItem(props.class, JSON.stringify(data.data)))
        } else {
            setData(storedData)
        }
    }, [props])
    return (
        <div className='eachClass'>
            {data?.map(each =>
                <div onClick={() => redirectToSubelement(each)} className='subelement'>{each.subelement_Title}</div>
            )}
        </div>
    );
};

export default EachClass;