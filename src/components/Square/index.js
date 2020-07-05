import React, { useState, useEffect } from 'react';
import "./style.css";

const Square = (props) => {

    const [color, setColor] = useState("white");

    useEffect(() => {
        console.log("square");
        if (props.squareStatus === 1) {
            setColor("#74b9ff");
            // setTimeout(() => setColor("#ED4C67"), props.delay);
        }
    }, [props.squareStatus]);


    return (
        <button style={{backgroundColor: color}} className="square-button btn"/>
    )
};

export default Square;