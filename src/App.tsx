import { Button } from "antd";
import "antd/dist/antd.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="Header">
        <h1 className="title">Pomofocus</h1>
        <div className="group-button-header">
          <button>Report</button>
          <button>Settings</button>
          <button>Login</button>
        </div>
      </div>

      <div className="timer-area">
        <div>
          <button className="group-button-timer">Pomodoro</button>
          <button className="group-button-timer">Short Break</button>
          <button className="group-button-timer">Long Break</button>
        </div>
        <div className="timer">25:00</div>

        <Button>Start</Button>
      </div>
    </div>
  );
}

export default App;
