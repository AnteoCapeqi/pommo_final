/* becodeorg/pomodoro
 *
 *
 * coded by Anteo with the the base code of leny@BeCode
 * started at 02/12/2019
 */


import React from "react";
import PropTypes from "prop-types";

const styles = {
    background: "#555",
    borderRadius: ".5rem",
    border: ".1rem solid black",
    padding: ".5rem 1.5rem",
    textAlign: "center",
    fontSize: "2.4rem",
    color: "white",
};

const Button = ({label, title, disabled = false, onClick}) => (
    <button
        type={"button"}
        style={styles}
        disabled={disabled}
        title={title}
        onClick={onClick}>
        {label}
    </button>
);

Button.propTypes = {
    label: PropTypes.string.isRequired,
    title: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
};

export default Button;
