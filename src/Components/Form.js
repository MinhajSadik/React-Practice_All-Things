import React from "react";

class Form extends React.Component {
  state = {
    title: "javascript",
    title2: "GoLang",
    text: "javascript is awesome",
    library: "react",
    isAwesome: true,
  };

  handleChange = (e) => {
    if (e.target.type === "text") {
      this.setState({
        title: e.target.value,
      });
    } else if (e.target.type === "textarea") {
      this.setState({
        text: e.target.value,
      });
    } else if (e.target.type === "select-one") {
      this.setState({
        library: e.target.value,
      });
    } else if (e.target.type === "checkbox") {
      this.setState({
        isAwesome: e.target.checked,
      });
    }
  };

  handleSubmit = (e) => {
    const { title, title2, text, library, isAwesome } = this.state;
    e.preventDefault();
    console.log(title, title2, text, library, isAwesome);
  };

  render() {
    const { title, title2, text, library, isAwesome } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={title} />
          <input
            type="text"
            placeholder="Enter Title"
            value={title2}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <textarea name="text" value={text} onChange={this.handleChange} />
          <br />
          <br />
          <select value={library} onChange={this.handleChange}>
            <option value="react">React</option>
            <option value="vue">Vue</option>
            <option value="anguler">Anguler</option>
          </select>
          <br />
          <br />
          <input
            type="checkbox"
            checked={isAwesome}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Form;
