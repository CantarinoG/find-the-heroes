import { useState } from "react";

import "./styles/App.css";

import Header from "./components/Header";
import GameImage from "./components/GameImage";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import Instructions from "./components/Instructions";

function App() {

  const [showIntroModal, setShowIntroModal] = useState(true);
  const [timeStarted, setTimeStarted] = useState(0);

  const closeIntroModal = () => {
    setShowIntroModal(false);
    setTimeStarted(new Date().getTime());
    setInterval(runTimer,1000);
  }

  return <>
  <Modal
  modalContent={<Instructions/>}
  buttonText="START"
  show={showIntroModal}
  onClick={closeIntroModal}
  />
  <Header
  />
  <GameImage/>
  <Footer/>
  </>;
}

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

export default App;
