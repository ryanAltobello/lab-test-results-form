import React from "react";

class ResultGrid extends React.Component {
  renderState = () => {};

  render() {
    console.log(this.props.formValues);
    const sodium = this.props.formValues.sodium[0];
    console.log(sodium);

    return (
      <table className="ui striped celled table">
        <thead>
          <tr>
            <th>1/17/2019</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="collapsing center aligned" id="sodium">
              {sodium}
            </td>
          </tr>
          <tr>
            <td className="collapsing center aligned" id="potassium">
              5.5
            </td>
          </tr>
          <tr />
        </tbody>
      </table>
    );
  }
}

export default ResultGrid;
