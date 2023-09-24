import React from "react";
import "./tiles.css";

function Tile() {
  function handleClick(event) {
    if (event.target !== event.currentTarget) {
      event.currentTarget.parentElement.style.display = "none";
    }
  }

  return (
    <div className="tile" onClick={handleClick}>
      <span>x</span>
    </div>
  );
}

export default Tile;
