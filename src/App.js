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
  const [foundAntMan, setFoundAntMan] = useState(false);
  const [foundDaredevil, setFoundDaredevil] = useState(false);
  const [foundDeadpool, setFoundDeadpool] = useState(false);

  const closeIntroModal = () => {
    setShowIntroModal(false);
    setTimeStarted(new Date().getTime());
    setInterval(runTimer,1000);
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

  return <>
  <Modal
  modalContent={<Instructions/>}
  buttonText="START"
  show={showIntroModal}
  onClick={closeIntroModal}
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
