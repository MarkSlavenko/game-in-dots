import React, { useState, useEffect, useRef } from 'react';
import "./style.css";

const Square = (props) => {

    const [color, setColor] = useState("white");
    const clicked = useRef();

    useEffect(() => {
        if (props.squareStatus === 1) {
            setColor("#74b9ff");
            setTimeout(() => {
                if (!clicked.current) {
                    pointToComputer();
                }
                }, props.delay);
        }
    }, [props.squareStatus]);

    const pointToComputer = () => {
        props.addPoint("computer");
        setColor("#ED4C67");
    };

    const pointToPlayer = () => {
        props.addPoint("player");
        setColor("#00e872");
    };

    useEffect(()=> {
        clicked.current = false;
        setTimeout(() => setColor("white"), 2000);
    }, [props.delay]);

    return (
        <button
            onMouseDown={props.squareStatus === 1 ?
                () => {
                clicked.current = true;
                pointToPlayer();
            }
                : null}
            style={{backgroundColor: color}}
            className="square-button btn"
        />
    )
};

export default Square;