import React from "react";

const ShowEmoji = (props) => {
  const emojiToShow = props.isCool
    ? "🎉 Yay! Let's party"
    : "🤢 I am just so lame";

  return <h3>{emojiToShow}</h3>;
};

export default ShowEmoji;
