import React from 'react';
import './i-button.css';

const Ibutton = ({className=""})=>{
    return (
        <div className="i-button">
            <i className={className}></i>
        </div>
    );
}

export default Ibutton;