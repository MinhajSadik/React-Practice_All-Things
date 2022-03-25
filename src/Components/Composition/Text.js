function Text({ addEmoji }) {
  const text = "i am JavaScript programming Language";
  return <div>{addEmoji ? addEmoji(text, "💩") : text}</div>;
}

export default Text;
