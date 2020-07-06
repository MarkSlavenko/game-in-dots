import React from 'react';
import "./style.css";
import Square from "../Square";

const Grid = (props) => {

    let grid = [];

    if (props.size) {
        for (let i = 0; i < props.size; i++) {
            let row = [];
            for (let k = 0; k < props.size; k++) {
                let current = 0;
                if (props.currentSquare === -1) {
                    current = -1;
                } else if ((props.size*i+k) === props.currentSquare) {
                    current = 1;
                }
                row.push(<Square
                    squareStatus={current}
                    delay={props.delay}
                    addPoint={props.addPoint}
                    key={"square" + i + k}
                />);
            }
            grid.push(<div key={"row" + i} className="flex-row">{row}</div>);
        }
    }

    return (
        <div className="col-12 grid">
            {grid}
        </div>

    )
};

export default Grid;