import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

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
          <input onChange={onChange} type={type} min={min} max={max} />
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

const mapStateToProps = state => {
  if (state.form.timerForm) {
    return { formValues: state.form.timerForm.values };
  } else {
    return { fromValue: { work: 0, break: 0, rounds: 0 } };
  }
};

const wrappedForm = reduxForm({
  form: "timerForm"
})(TimerForm);

export default connect(mapStateToProps)(wrappedForm);
