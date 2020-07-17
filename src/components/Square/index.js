import React, { useState, useEffect, useRef } from 'react';
import './style.css';

const Square = ({ delay, squareStatus, addPoint }) => {
  const [color, setColor] = useState('white');
  const clicked = useRef();
  const status = useRef();

  const pointToComputer = () => {
    if (status.current === 1) {
      clicked.current = false;
      addPoint('computer');
      setColor('#ED4C67');
    } else {
      setColor('white');
    }
  };

  const pointToPlayer = () => {
    if (status.current === 1) {
      clicked.current = false;
      addPoint('player');
    } else {
      setColor('white');
    }
  };

  useEffect(() => {
    status.current = squareStatus;
    if (status.current === -1) {
      setColor('white');
    } else if (status.current === 1) {
      setColor('#74b9ff');
      setTimeout(() => {
        if (clicked.current) {
          pointToPlayer();
        } else {
          pointToComputer();
        }
      }, delay);
    }
  }, [squareStatus]);

  return (
    <button
      onMouseDown={
                squareStatus === 1
                  ? () => {
                    clicked.current = true;
                    setColor('#00e872');
                  }
                  : null
}
      style={{ backgroundColor: color }}
      className="square-button btn"
    />
  );
};

export default Square;
