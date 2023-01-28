import { useState, useEffect } from "react";

import "./styles/App.css";

import Header from "./components/Header";
import GameImage from "./components/GameImage";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import Instructions from "./components/Instructions";
import Submit from "./components/Submit";

import { miliToMinSec } from "./utils/converter";

function App() {

  const [showIntroModal, setShowIntroModal] = useState(true);
  const [timeStarted, setTimeStarted] = useState(0);
  const [finalTime, setFinalTime] = useState(0);
  const [foundAntMan, setFoundAntMan] = useState(false);
  const [foundDaredevil, setFoundDaredevil] = useState(false);
  const [foundDeadpool, setFoundDeadpool] = useState(false);
  const [showGameFinishedModal, setShowGameFinishedModal] = useState(false);
  const [showLeaderboardModal, setShowLeaderboardModal] = useState(false);
  const [userName, setUserName] = useState("Unknown");

  useEffect(() => {
    if(foundAntMan && foundDaredevil && foundDeadpool) {
      clearInterval(timerInterval);
      finishTimer();
      setShowGameFinishedModal(true);
      setFinalTime(new Date().getTime() - timeStarted);
    }
  }, [foundAntMan, foundDaredevil, foundDeadpool]);

  const closeIntroModal = () => {
    setShowIntroModal(false);
    setTimeStarted(new Date().getTime());
    timerInterval = setInterval(runTimer,1000);
  }

  const handleImageClick = (e) => {        
    const xCoord = Math.round((e.nativeEvent.offsetX / e.target.offsetWidth) * 100);
    const yCoord = Math.round((e.nativeEvent.offsetY / e.target.offsetHeight) * 100);
    if(xCoord >= 89 && xCoord <= 98 && yCoord >= 41 && yCoord <= 48){
      setFoundDaredevil(true);
    } else if(xCoord >= 54 && xCoord <= 61 && yCoord >= 61 && yCoord <= 65) {
      setFoundDeadpool(true);
    } else if(xCoord >= 53 && xCoord <= 56 && yCoord >= 95 && yCoord <= 98) {
      setFoundAntMan(true);
    }
  };

  const getUserName = (e) => {
    const name = e.target.value;
    setUserName(name);
  }

  const submitTime = () => {
      setShowGameFinishedModal(false);
  }

  return <>
  <Modal
  modalContent={<Instructions/>}
  buttonText="START"
  show={showIntroModal}
  //show={false}
  onClick={closeIntroModal}
  />
  <Modal
  modalContent={<Submit time={miliToMinSec(finalTime)} inputFunction={getUserName}/>}
  buttonText="SUBMIT TIME"
  show={showGameFinishedModal}
  //show={true}
  onClick={submitTime}
  />
  <Header
  foundAntMan={foundAntMan}
  foundDaredevil={foundDaredevil}
  foundDeadpool={foundDeadpool}
  />
  <GameImage
  clickFunction={handleImageClick}
  />
  <Footer/>
  </>;
}

let timerInterval;
let i = 0;

function runTimer() {
  i = i + 1;
  document.querySelector('.timer').textContent = Math.floor(i/60).toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false
  }) + ":" + (i%60).toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false
  });
}

function finishTimer() {
  document.querySelector('.timer').textContent = "--:--";
}

export default App;

/*
Notes:
Create new modal for leaderboard
Leaderboard modal appears on two occasions: When user click on it and when user submits time.
*/ 
