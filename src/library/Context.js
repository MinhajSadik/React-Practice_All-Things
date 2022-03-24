class Context {
  constructor(value = null) {
    this.value = value;
  }

  // Provider
  // Provider is a component that provides a value to its descendents.
  Provider = ({ children, value }) => {
    this.value = value;
    return children;
  };

  // Consumer
  // Consumer is a component that consumes a value from its parent.
  Consumer = ({ children }) => children(this.value);
}

function createContext(value = null) {
  const context = new Context(value);
  return {
    Provider: context.Provider,
    Consumer: context.Consumer,
  };
}

export default createContext;
