import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

import "../scss/TimerForm.scss";

export class TimerForm extends Component {
  formatMinutes = minutes => {
    return `${minutes}:00`;
  };

  renderField = ({ input: { onChange, value }, label, type, min, max }) => {
    return (
      <div className="form-control">
        <label className="form-control__label">{label}</label>
        <p className="form-control__value">
          {label === "Rounds" ? value : this.formatMinutes(value)}
        </p>
        <div>
          <input
            className="form-control__input"
            onChange={onChange}
            type={type}
            min={min}
            max={max}
            value={value}
          />
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="menu">
        <p className="menu__header">Timer</p>
        <form className="menu__form">
          <Field
            name="work"
            type="range"
            min="1"
            max="60"
            component={this.renderField}
            label="Work"
          />
          <Field
            name="break"
            type="range"
            min="1"
            max="60"
            component={this.renderField}
            label="Break"
          />
          <Field
            name="rounds"
            type="range"
            min="1"
            max="10"
            component={this.renderField}
            label="Rounds"
          />
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "timerForm"
})(TimerForm);
