function Text({ addEmoji, addBracket }) {
  let text = "I'm JavaScript Programming Language";
  if (addEmoji) {
    text = addEmoji(text, "😀");
  }
  if (addBracket) {
    text = addBracket(text);
  }
  return <div>{text}</div>;
}

export default Text;
