import React, { useState, useEffect } from 'react';
import "./style.css";

const Square = (props) => {

    const [color, setColor] = useState("white");

    useEffect(() => {
        console.log("square")
        if (props.squareStatus) {
            switch (props.squareStatus) {
                case 0:
                    setColor("white");
                    break;
                case -1:
                    setColor("#ED4C67");
                    break;
                case 1:
                    setColor("#74b9ff");
                    break;
                case 2:
                    setColor("#00e872");
                    break;
            }
        }
    });


    return (
        <button style={{backgroundColor: color}} className="square-button btn"/>
    )
};

export default Square;