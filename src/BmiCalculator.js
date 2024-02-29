import React, { useState } from "react";

export default function Calculator() {
  const [weight, setWeight] = useState(null);
  const [height, setHeight] = useState(null);
  const [bmi, setBmi] = useState(null);

  function updateWeight(event) {
    setWeight(event.target.value);
  }

  function updateHeight(event) {
    setHeight(event.target.value);
  }

  function calculatedBmi(event) {
    event.preventDefault();
    let calcultedBmi = (weight / ((height / 100) * (height / 100))).toFixed(1);
    setBmi(calcultedBmi);
  }

  return (
    <div className="Calculator">
      <div className="card">
        <h6 className="text-center">BMI Calculator</h6>
        <form onSubmit={calculatedBmi}>
          <div className="mb-3">
            <label className="form-label weight">Weight (kg)</label>
            <input
              type="number"
              className="form-control"
              onChange={updateWeight}
            />
          </div>
          <div className="mb-3">
            <label className="form-label height">Height (cm)</label>
            <input
              type="number"
              className="form-control"
              onChange={updateHeight}
            />
          </div>

          <button type="submit" className="btn btn-branding">
            Calculate
          </button>
        </form>
        <br />
        <strong>Your BMI is: {bmi}</strong>
      </div>
    </div>
  );
}
