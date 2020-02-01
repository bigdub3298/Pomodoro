import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

export class TimerForm extends Component {
  formatMinutes = minutes => {
    return `${minutes}:00`;
  };

  renderField = ({ input: { onChange, value }, label, type, min, max }) => {
    return (
      <div>
        <label>{label}</label>
        <p>{this.formatMinutes(value)}</p>
        <div>
          <input
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
      <div>
        <p>Timer</p>
        <form>
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
