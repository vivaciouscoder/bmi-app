import React from "react";
import "./BmiApp.css";
import Calculator from "./BmiCalculator";
export default function BmiApp() {
  return (
    <div className="BmiApp">
      <div className="container">
        <div className="row">
          <h1 className="mb-2">Body Mass Index</h1>
          <div className="col-8">
            <p className="app-description">
              <strong> Body mass index (BMI)</strong> is a measure of body fat
              based on height and weight that applies to adult men and women.
              This calculator provides BMI and the corresponding BMI weight
              status category for adults 20 years and older. Check your BMI to
              find out if you're a healthy weight for your height, and get
              advice on what to do next.
            </p>
          </div>

          <div className="row mt-2">
            <div className="col-8">
              <img
                src="https://images.everydayhealth.com/images/diet-nutrition/adult-body-mass-index-guide-alt-1440x810.jpg?sfvrsn=5d905d91_2"
                alt="body mass index range"
                className="bmi-range img-fluid d-none d-md-block"
                width={700}
              />
            </div>
            <div className="col-4 calculator">
              <Calculator />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
