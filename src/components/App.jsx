import { useState } from "react";

// Router
import { Route, Routes, Link } from "react-router-dom";

// Images
import RockImg from "../images/icon-rock.svg";
import ScissorImg from "../images/icon-scissors.svg";
import PaperImg from "../images/icon-paper.svg";

// CSS
import "./App.css";

// Functions

import { Score } from "./Header";

// Hoved komponentet. PreGame som default. Viser alternativvene.
// Etter valg går den til den spesifikke handen ut fra hvilken ID
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PreGame />} />
        <Route path=":id" element={<EnterGame />} />
      </Routes>
    </div>
  );
}

// Lager en selectedbox. Gir hver enkelt props som bilde, id og classname
const SelectedBox = ({ img, id, className }) => {
  const [idfer, setIdfer] = useState("");

  const handleClick = (newId) => {
    setIdfer(newId);
  };

  return (
    <Link to={idfer}>
      <div
        onClick={() => {
          handleClick(id);
        }}
        className={className + " SelectorBox"}
        id={id}
      >
        <img src={img} alt="selcted" id={id} />
      </div>
    </Link>
  );
};

// Før-valgt hand. Bruker selectedbox til å rendre ut de forskjellig valgene
// gir de en unik ID hver. Som skal refereres til i neste skjerm
function PreGame() {
  return (
    <div className="GameBox">
      <div className="GameBoxTop">
        <SelectedBox img={PaperImg} id="paper" className="PaperBox" />
        <SelectedBox img={ScissorImg} id="scissor" className="ScissorBox" />
      </div>

      <SelectedBox img={RockImg} id="rock" className="RockBox" />
    </div>
  );
}

// Funskjon for å få frem riktig valgt hand. Referere til ID i Link
const PickedHand = ({ id, img }) => {
  return (
    <>
      <div>
        <h2>YOU PICKED</h2>
      </div>
      {console.log(img)}
      <div className="SelectedBoxBig BlueBig">
        <img src={img} id={id} alt="" className=" PaperHandBig" />
      </div>
      <div>
        <h2>THE HOUSE PICKED</h2>
      </div>
      <ComputerChoice />
      <div>
        <button>
          <Link to="/">Return</Link>
        </button>
      </div>
    </>
  );
};

// Her skal den valgte handen rendres og kjøres gjennom en kamp.
// Velges etter referert ID
function EnterGame({ id, img }) {
  const [hand, setHand] = useState(0);

  return (
    <>
      <div className="enterGame">
        <div className="pickedHand">
          <h2>YOU PICKED</h2>
          <GameRun id={id} />
        </div>
        <div>
          <WinnerSelector />

          <Link className="returnBtn" to="/">
            Return
          </Link>
        </div>
        <div className="pickedHand">
          <h2>THE HOUSE PICKED</h2>
          <ComputerChoice />
        </div>
      </div>
    </>
  );
}

function GameRun(id, value) {
  let img = id;
  if (img === "rock") {
    img = RockImg;
  } else if (id === "scissor") {
    img = ScissorImg;
  } else {
    img = PaperImg;
  }
  return (
    <>
      <div className="SelectedBoxBig BlueBig">
        <img src={img} id={id} value={value} className=" PaperHandBig" />
      </div>
    </>
  );
}

function ComputerChoice(id) {
  return (
    <>
      <RandomPicker />

      {/* <div className="SelectedBoxBig BlueBig">
        <img src={PaperImg} id={options} alt="" className=" PaperHandBig" />
      </div> */}
    </>
  );
}

function RandomPicker() {
  const [selectedOption, setSelectedOption] = useState(null);
  const options = ["rock", "paper", "scissor"];
  const randomIndex = Math.floor(Math.random() * options.length);
  const handleClick = () => {
    setSelectedOption(options[randomIndex]);
  };

  return (
    <div>
      <p>
        <div className="SelectedBoxBig BlueBig">
          <img
            src={
              selectedOption === "rock"
                ? RockImg
                : selectedOption === "paper"
                ? PaperImg
                : ScissorImg
            }
            alt=""
          />
        </div>
      </p>
      <button onClick={handleClick}>Pick</button>
    </div>
  );
}

function WinnerSelector() {
  let myChoice = GameRun();
  let coChoice = ComputerChoice();
  let result = "";
  if (myChoice === coChoice) {
    result = "DRAW";
  } else if (myChoice === "rock" && coChoice === "paper") {
    result = "You loose";
  } else if (myChoice === "paper" && coChoice === "scissor") {
    result = "You loose";
  } else if (myChoice === "scissor" && coChoice === "rock") {
    result = "You loose";
  } else {
    result = "You win";
    Score(() => {
      return count++;
    });
  }
  return (
    <>
      <p>{result}</p>
    </>
  );
}

export default App;
