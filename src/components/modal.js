/* becodeorg/pomodoro
 *
 * /app.js - Main entry point
 *
 * coded by Anteo with the the base code of leny@BeCode
 * started at 02/12/2019
 */

import React from "react";
import ReactDOM from "react-dom";

const styles = {
    container: {
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        background: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    modal: {
        width: "33vw",
        height: "15vh",
        background: "silver",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#333",
    },
};

const Modal = () =>
    ReactDOM.createPortal(
        <div style={styles.container}>
            <div style={styles.modal}>
                <h1>{"hi!"}</h1>
            </div>
        </div>,
        document.querySelector("#modals"),
    );

export default Modal;
