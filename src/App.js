import React from "react";
import "./style.css";

export default function App() {
  return (
    <div class="container">
      <div class="gfg-div">
        <div class="gfg-logo" />
        <p>HELLO</p>
        <div class="gfg-title">Satyam</div>
        <div class="gfg-sub-title">Login Form</div>
        <div class="gfg-input-fields">
          <div class="gfg-email fa fa-email">
            <input type="email" placeholder="email" />
          </div>
          <div class="gfg-password fa fa-password">
            <input type="password" placeholder="password" />
          </div>
        </div>
        <button class="gfg-button">Ghazing Technosoft Signin</button>
        <div class="gfg-link">
          <a href="#">Forgot password?</a> or
          <a href="#">Signup</a>
        </div>
      </div>
    </div>
  );
}
