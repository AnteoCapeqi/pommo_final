/* becodeorg/pomodoro
 *
 *
 * coded by Anteo with the the base code of leny@BeCode
 * started at 02/12/2019
 */


import React, {useState, useEffect, useCallback} from "react";

import Cyphers from "../components/cyphers";
import Button from "../components/button";
import Modal from "../components/modal";

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "50vw",
        height: "30vh",
        border: ".1rem solid brown",
    },
    timer: {
        flex: "1 0 auto",
        textAlign: "center",
        fontFamily: "monospace",
        fontSize: "12.5rem",
        fontWeight: "bold",
    },
    tools: {
        height: "5rem",
        flex: "none",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
};

const DEFAULT_TIMER_VALUE = 10; // 25 * 60;
const NBSP = "\u00a0";

export default () => {
    const [intervalId, setIntervalId] = useState();
    const [timer, setTimer] = useState(DEFAULT_TIMER_VALUE);
    const [running, setRunning] = useState(false);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (running) {
            const id = setInterval(
                () => setTimer(t => Math.max(0, t - 1)),
                1000,
            );
            setIntervalId(id);
        } else {
            clearInterval(intervalId);
            setIntervalId(null);
        }

        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [running]);

    useEffect(() => {
        if (timer === 0) {
            setRunning(false);
            setShowModal(true);
        }
    }, [timer]);

    const handleStartStop = useCallback(() => setRunning(!running), [running]);
    const handleReset = useCallback(() => setTimer(DEFAULT_TIMER_VALUE), []);

    let separator = ":";

    if (running) {
        separator = timer % 2 ? NBSP : ":";
    }

    return (
        <div style={styles.container}>
            {showModal ? <Modal /> : null}
            <div style={styles.timer}>
                <Cyphers value={Math.floor(timer / 60)} />
                {separator}
                <Cyphers value={timer % 60} />
            </div>
            <div style={styles.tools}>
                <Button
                    label={"Reset"}
                    onClick={handleReset}
                    disabled={running}
                />
                {NBSP}
                <Button
                    label={running ? "Stop" : "Start"}
                    onClick={handleStartStop}
                />
            </div>
        </div>
    );
};
