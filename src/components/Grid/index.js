import React from 'react';
import GridRow from '../GridRow';

const Grid = ({
  size,
  currentSquare,
  delay,
  addPoint,
}) => {
  const grid = [];

  if (size) {
    for (let i = 0; i < size; i += 1) {
      grid.push(
        <div key={`'row' ${i}`} className="flex-row">
          <GridRow
            size={size}
            rowNumber={i}
            currentSquare={currentSquare}
            delay={delay}
            addPoint={addPoint}
          />
        </div>
      );
    }
  }

  return (
    <div className="col-12 grid">
      {grid}
    </div>

  );
};

export default Grid;
