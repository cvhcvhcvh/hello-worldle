import React from "react";

const Tile = ({ guess, submitted, index, correctWord }) => {
  let BLACK = "#111";
  let GREY = "#212121";
  let MIDDLEGREY = "#666";
  let LIGHTGREY = "#888";
  let GREEN = "#538d4e";
  let YELLOW = "#b59f3b";

  let content;
  if (guess[index]) {
    content = guess[index];
  } else {
    content = "";
  }
  if (!submitted) {
  }
  function getBgColor(guess, index) {
    let correctLetter = correctWord[index];
    let attemptLetter = guess[index];
    if (
      attemptLetter === undefined ||
      correctWord.indexOf(attemptLetter) === -1
    ) {
      return "wrong";
    }
    if (correctLetter === attemptLetter) {
      return "correct";
    }
    return "present";
  }
  let color = getBgColor(guess, index);

  const flipTile = () => {
    // ! todo, need to animate the flip then call getColor()
    // getColor()
  };

  return (
    <div
      className={
        submitted
          ? `tile ${color}`
          : !submitted && `${content}`
          ? "tile active"
          : "tile"
      }
    >
      {content}
    </div>
  );
};
export default Tile;
