import React, { useState } from "react";

export default function Calculator() {
  const [weight, setWeight] = useState(null);
  const [height, setHeight] = useState(null);
  const [bmi, setBmi] = useState(null);
  const [bmiStatus, setBmiStatus] = useState(null);

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
    if (calcultedBmi < 18.5) {
      setBmiStatus("(Underweight)");
    } else if (calcultedBmi >= 18.5 && calcultedBmi <= 24.9) {
      setBmiStatus("(Normal)");
    } else if (calcultedBmi >= 25 && calcultedBmi <= 29.9) {
      setBmiStatus("(Overweight)");
    }
    if (calcultedBmi > 30) {
      setBmiStatus("(Obese)");
    }
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
        <strong className="bmi">
          Your BMI: {bmi} {bmiStatus}
        </strong>
      </div>
    </div>
  );
}
