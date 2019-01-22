import React from "react";

class InputForm extends React.Component {
  state = {
    sodium: [],
    potassium: []
  };

  updateTable = e => {
    const name = e.target.name;
    this.setState({
      [name]: [e.target.value]
    });
  };

  onClick = e => {
    e.preventDefault();
    this.props.getFormValues(this.state);
  };

  render() {
    return (
      <form
        onSubmit={this.onClick}
        className="ui form"
        style={{ marginTop: "50px" }}
      >
        <div className="inline field">
          <label style={{ marginRight: "27px" }}>Sodium</label>
          <input
            name="sodium"
            type="number"
            placeholder="Enter value"
            onChange={this.updateTable}
            autoComplete="off"
          />
        </div>
        <div className="inline field">
          <label>Potassium</label>
          <input
            name="potassium"
            type="number"
            placeholder="Enter value"
            onChange={this.updateTable}
          />
        </div>
        <input type="submit" />
      </form>
    );
  }
}

export default InputForm;
