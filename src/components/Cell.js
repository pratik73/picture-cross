import React, { useState } from "react";

function Cell({ content }) {
  const [style, setStyle] = useState("cell");
  const changeStyle = () => {
    setStyle(style === "cell" ? "cell-clicked" : "cell");
  };

  return (
    <td className={style} onClick={changeStyle}>
      {content}
    </td>
  );
}

export default Cell;
