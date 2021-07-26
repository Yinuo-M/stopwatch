import React, { useState, useEffect, useRef } from "react";
import Timer from "./timer/Timer";
import Controls from "./controls/Controls";
import LapTable from "./lap-table/LapTable";
import { convertToDisplayTime } from "./common/Utils";
import "./Stopwatch.scss";

export default function Stopwatch() {
  //All time values are in miliseconds.

  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  /*startTime is declared as a ref rather than a state for the following
    reason: Because React batch updates states, if we declare startTime
    as a state, when we first call updateTime, we don't have immediate
    access to the new startTime inside updateTime. This causes the
    calculation inside setCurrentTime to be wrong. Declaring startTime as 
    a ref solves this problem. */
  const startTime = useRef(0);
  /*elapsedTime tracks the amount of time recorded by the timer
    when the user press pause.*/
  const [elapsedTime, setElapsedTime] = useState(0);
  // Current time is the amount of time that should be displayed.
  const [currentTime, setCurrentTime] = useState(0);
  //requestId is declared as a ref so changes in Id won't trigger a re-render.
  const requestId = useRef(null);
  const [prevLapTime, setPrevLapTime] = useState(0);
  const [lapHistory, setLapHistory] = useState([]);

  function startTimer() {
    setIsPaused(false);
    setIsActive(true);
    requestAnimationFrame(updateTime);
  }

  function updateTime(timestamp) {
    if (!startTime.current) startTime.current = timestamp;
    setCurrentTime(elapsedTime + timestamp - startTime.current);
    console.log("running");

    const newRequestId = requestAnimationFrame(updateTime);
    requestId.current = newRequestId;
  }

  function pauseTimer() {
    if (requestId.current) cancelAnimationFrame(requestId.current);
    requestId.current = null;
    startTime.current = 0;
    setIsPaused(true);
    setElapsedTime(currentTime);
  }

  function resetTimer() {
    if (requestId.current) cancelAnimationFrame(requestId.current);
    requestId.current = null;
    startTime.current = 0;
    setIsPaused(false);
    setIsActive(false);
    setElapsedTime(0);
    setCurrentTime(0);
    setPrevLapTime(0);
  }

  function lapTimer() {
    updateLapHistory();
    setPrevLapTime(currentTime);
  }

  function storeLapHistory(newRecord) {
    const history = JSON.parse(localStorage.getItem("lapHistory"));
    history.push(newRecord);
    localStorage.setItem("lapHistory", JSON.stringify(history));
  }

  function updateLapHistory() {
    let lapRecord = {};
    lapRecord.totalTime = convertToDisplayTime(currentTime);
    lapRecord.lapTime = convertToDisplayTime(currentTime - prevLapTime);
    storeLapHistory(lapRecord);
    setLapHistory((prevState) => {
      const newState = [...prevState];
      newState.push(lapRecord);
      return newState;
    });
  }

  function clearLapHistory() {
    setLapHistory([]);
    localStorage.setItem("lapHistory", "[]");
    setPrevLapTime(0);
  }

  useEffect(() => {
    //Get lapHistory from localStorage upon
    const storedLapHistory = localStorage.getItem("lapHistory");
    if (!storedLapHistory) {
      localStorage.setItem("lapHistory", "[]");
    } else {
      setLapHistory(JSON.parse(storedLapHistory));
    }

    //Clean up requestAnimationFrame
    return () => {
      if (requestId.current) cancelAnimationFrame(requestId.current);
    };
  }, []);

  return (
    <div className="stopwatch">
      <Timer currentTime={currentTime} />
      <Controls
        isActive={isActive}
        isPaused={isPaused}
        startTimer={startTimer}
        pauseTimer={pauseTimer}
        resetTimer={resetTimer}
        lapTimer={lapTimer}
      />
      {lapHistory.length > 0 && (
        <LapTable lapHistory={lapHistory} clearLapHistory={clearLapHistory} />
      )}
    </div>
  );
}
