/* eslint-disable react/jsx-no-undef */
import "antd/dist/antd.css";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import TimerArea from "./components/TimerArea/TimerArea";

export default function App() {
  return (
    <>
      <Main />
      <Header />
      <TimerArea />
    </>

    // <div className="App">
    //
    //   </div>

    //   <div className="timer-area">
    //     <div>
    //       <button className="group-button-timer">Pomodoro</button>
    //       <button className="group-button-timer">Short Break</button>
    //       <button className="group-button-timer">Long Break</button>
    //     </div>
    //     <div className="timer">25:00</div>
    //     <Button>Start</Button>
    //   </div>
    //   <div>
    //     <h3>#1</h3>
    //     <h4>Time to focus!</h4>
    //     <button>Add task</button>
    //   </div>
    //   <div className="list">
    //     <ol>
    //       <li>Estudar para a Prova de Biologia</li>
    //       <li>Revisar a matéria de Quimíca</li>
    //       <li>Estudar para a Prova de História</li>
    //     </ol>
    //   </div>
    // </div>
  );
}
