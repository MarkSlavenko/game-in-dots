import React from 'react';
import Square from '../Square';

const GridRow = ({
  size,
  rowNumber,
  currentSquare,
  delay,
  addPoint,
}) => {
  const row = [];

  if (size) {
    for (let k = 0; k < size; k += 1) {
      let current = 0;
      if ((size * rowNumber + k) === currentSquare) {
        current = 1;
      } else if (currentSquare === -1) {
        current = -1;
      }
      row.push(<Square
        squareStatus={current}
        delay={delay}
        addPoint={addPoint}
        key={`'square' ${rowNumber} ${k}`}
      />);
    }
  }

  return (row);
};

export default GridRow;
