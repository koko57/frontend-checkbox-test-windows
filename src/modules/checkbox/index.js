/* eslint-disable */
import React from 'react';

class Checkbox extends React.Component {
  constructor() {
    super();
    this.state = {
      checked: false
    };
  }
  handleChange = () => {
    this.setState({ checked: !this.state.checked });
  };
  render() {
    const { checked } = this.state;
    return (
      <div className="checkbox">
        <div className="title">Checkbox</div>
        <div className="content">
          <input
            type="checkbox"
            id="check"
            className="checkbox__input"
            checked={this.state.checked}
            onChange={this.handleChange}
          />
          <label
            htmlFor="check"
            className={
              checked ? 'input-wrapper input-wrapper--checked' : 'input-wrapper'
            }
          >
            <div className="input-check" />
          </label>
        </div>
        {checked && <div className="hidden-content">hidden content</div>}
      </div>
    );
  }
}

export default Checkbox;
