import { Button } from "antd";
import {
  ContentLabel,
  LabelH3,
  LabelH4,
  TaskList,
  Timer,
  TimerAreaContainer,
} from "./TimeArea.styles";

const TimerArea = () => {
  return (
    <TimerAreaContainer>
      <Button className="group-button-timer">Pomodoro</Button>
      <Button className="group-button-timer">Short Break</Button>
      <Button className="group-button-timer">Long Break</Button>

      <Timer> 25:00 </Timer>
      <Button>Start</Button>

      <ContentLabel>
        <LabelH3>#1</LabelH3>

        <LabelH4>Time to focus!</LabelH4>
        <Button>Add task</Button>
      </ContentLabel>

      <TaskList>
        <ol>
          <li>Estudar para a Prova de Biologia</li>
          <li>Revisar a matéria de Quimíca</li>
          <li>Estudar para a Prova de História</li>
        </ol>
      </TaskList>
    </TimerAreaContainer>
  );
};

export default TimerArea;
