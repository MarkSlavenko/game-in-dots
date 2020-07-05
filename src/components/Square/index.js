import React, { useState, useEffect } from 'react';
import "./style.css";

const Square = (props) => {

    const [color, setColor] = useState("white");
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        if (props.squareStatus === 1) {
            setColor("#74b9ff");
            setTimeout(() => {
                console.log(clicked);
                clicked ? setColor("#00e872") : setColor("#ED4C67");
            }, props.delay);
        }
    }, [props.squareStatus]);


    return (
        <button
            onClick={() =>setClicked(true)}
            style={{backgroundColor: color}}
            className="square-button btn"
        />
    )
};

export default Square;