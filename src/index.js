import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div>
      <nav className="navbar-expand-lg bg-body-tertiary ">
        <div class="container my-5 d-flex justify-content-between">
          <a href="/" title="Homepage">
            BMI Calculator
          </a>

          <ul class="d-flex mt-2">
            <li>
              <a href="/" class="active" title="Homepage">
                Home
              </a>
            </li>
            <li>
              <a href="/about.html" title="About page">
                About
              </a>
            </li>

            <li>
              <a href="/contact.html" title="Contact page">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>{" "}
      <App />
      <footer>
        <div className="contact-box d-none d-md-block">
          <div className="row">
            <div className="col-9">
              <h6 className="text-start mt-3">Work Inquiry</h6>
              <p className="text-muted text-start">Let's work together</p>
            </div>

            <div className="col-3 mt-4">
              <a
                href="/contact.html"
                className="btn btn-branding py-3 px-4"
                title="contact page"
              >
                Contact me
              </a>
            </div>
          </div>
        </div>
        <div className="contact-icons mt-4">
          <a
            href="mailto:v.mousavie@gmail.com"
            target="_blank"
            rel="noreferrer"
            title="vida's email adress"
          >
            <i class="fa-solid fa-envelope"></i>
          </a>
          <a
            href="https://github.com/vivaciouscoder"
            target="_blank"
            rel="noreferrer"
            title="vida's github adress"
          >
            <i className="fa-brands fa-github"></i>
          </a>

          <a
            href="https://www.instagram.com/blogbyviv/"
            target="_blank"
            rel="noreferrer"
            title="vida's instagram adress"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/vahide-mousavi/"
            target="_blank"
            rel="noreferrer"
            title="vida's Linkedin adress"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
        <p className="mt-5 mb-5 mx-4 source-code text-center">
          This website was coded by Vida Mousavi, and is
          <a
            href="https://github.com/vivaciouscoder/bmi-app"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            open-sourced
          </a>
        </p>
      </footer>
    </div>
  </React.StrictMode>
);

reportWebVitals();
