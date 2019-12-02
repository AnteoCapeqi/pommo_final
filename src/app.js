/* becodeorg/pomodoro
 *
 * /app.js - Main entry point
 *
 * coded by Anteo with the the base code of leny@BeCode
 * started at 02/12/2019
 */

import React from "react";
import ReactDOM from "react-dom";

import Pomodoro from "./containers/pomodoro";

ReactDOM.render(<Pomodoro />, document.querySelector("#app"));
