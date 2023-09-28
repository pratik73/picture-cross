import React from "react";
import "./PictureCrossGrid.css";
import Cell from "./Cell";

const PictureCrossGrid = (props) => {
  const { rows, columns, values } = props;
  // Function to render the grid cells
  const renderGridCells = () => {
    const cells = [];

    for (let row = 0; row < rows; row++) {
      const rowCells = [];
      for (let col = 0; col < columns; col++) {
        const cellContent = "X";
        rowCells.push(
          <Cell content={values[row][col] ?? cellContent} key={col} />
        );
      }
      cells.push(<tr key={row}>{rowCells}</tr>);
    }

    return cells;
  };

  return (
    <table className='grid'>
      <tbody>{renderGridCells()}</tbody>
    </table>
  );
};

export default PictureCrossGrid;
