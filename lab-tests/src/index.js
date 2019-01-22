import React from "react";
import ReactDOM from "react-dom";
import InputForm from "./InputForm";
import ResultGrid from "./ResultGrid";

class App extends React.Component {
  constructor(props) {
    super(props);
    const today = new Date();
    const month = today.getDay();

    this.state = {
      sodium: [],
      potassium: []
    };
  }
  handleClick = e => {};

  onSubmit = form => {
    this.setState({
      sodium: form.sodium.concat(this.state.sodium),
      potassium: form.potassium.concat(this.state.potassium)
    });
  };

  render() {
    return (
      <div className="ui top attached container segment">
        <div className="ui top attached tabular menu">
          <a id="chemistry" className="item active" onClick={this.handleClick}>
            Chemistry
          </a>
          <a id="hematology" className="item" onClick={this.handleClick}>
            Hematology
          </a>
        </div>
        <div className="ui bottom attached segment">
          <div className="ui grid">
            <div className="six wide column">
              <InputForm getFormValues={this.onSubmit} />
            </div>
            <div className="one wide column">
              <ResultGrid formValues={this.state} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
