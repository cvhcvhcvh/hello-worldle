import React from "react";

const Key = ({ value, index, history, currentGuess, secret, onKey, color }) => {

  return (
    <button
      className="key"
      onClick={() => {
        onKey(value);
      }}
      style={{ backgroundColor: color }}
    >
      {value}
    </button>
  );
};

export default Key;
