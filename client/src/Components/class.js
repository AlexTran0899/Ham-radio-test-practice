import React, { useState, useEffect } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import './class.css'

const Class = (props) => {
    const { push } = useHistory();
    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_API_URI}/api/questions`)
        .then(data => console.log(data.data))
    },[props])
    return (
        <div className='classouter'>
            <div className='classes'>
                {props.class === 'Technician' || props.class === undefined? <div className='classButton ' onClick={() => push('/Technician')}>
                    <h1>Technician</h1>
                    <ul>
                        <li>- 423 questions</li>
                        <li>- Two weeks to study</li>
                        <br />
                        <li>- 1500 watt max transmit power</li>
                        <li>- UHF 23, 33, 70 Centimeters</li>
                        <li>- VHF 1.25, 2, 6 Meters</li>
                        <li>- HF 10</li>
                        <li>- HF 15, 40, 80 Meters CW ONLY</li>
                    </ul>
                </div>: null}
                {props.class === 'General' || props.class === undefined? <div className='classButton' onClick={() => push('/General')}>
                    <h1>General</h1>
                    <ul>
                        <li>- 423 questions</li>
                        <li>- Two weeks to study</li>
                        <li>- item one</li>
                    </ul>
                </div>: null}
                {props.class === 'AmateurExtra' || props.class === undefined? <div className='classButton' onClick={() => push('/AmateurExtra')}>
                    <h1>Amateur Extra</h1>
                    <ul>
                        <li>- 423 questions</li>
                        <li>- Two weeks to study</li>
                        <li>- item one</li>
                    </ul>
                </div>:null}
            </div>
        </div>
    );
};

export default Class;