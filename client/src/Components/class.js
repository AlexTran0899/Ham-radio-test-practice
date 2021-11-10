import React, { useState, useEffect } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import './class.css'

const Class = (props) => {
    const { push } = useHistory();
    const [data, setData] = useState(null)

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
        <div className='classouter'>
            <div className='classes'>
                {props.class === 'Technician' || props.class === undefined ? <div className='classButton' onClick={() => push('/Technician')}>
                    <h1>Technician</h1>
                </div> : null}
                {props.class === 'General' || props.class === undefined ? <div className='classButton' onClick={() => push('/General')}>
                    <h1>General</h1>
                </div> : null}
                {props.class === 'AmateurExtra' || props.class === undefined ? <div className='classButton' onClick={() => push('/AmateurExtra')}>
                    <h1>Amateur Extra</h1>
                </div> : null}
            </div>
        </div>
    );
};

export default Class;