function Text({ addEmoji }) {
  const text = "I'm JavaScript Programming Language";
  return <div>{addEmoji ? addEmoji(text, "💩") : text}</div>;
}

export default Text;
