import { Button } from "react-bootstrap";
import {
  ButtonsArea,
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
      <ButtonsArea>
        <Button variant="outline-primary">Pomodoro</Button>
        <Button variant="outline-primary">Short Break</Button>
        <Button variant="outline-primary">Long Break</Button>
      </ButtonsArea>

      <Timer> 25:00 </Timer>
      <Button variant="danger">Start</Button>
      <ContentLabel>
        <LabelH3>#1</LabelH3>

        <LabelH4>Time to focus!</LabelH4>
        <Button variant="danger">Add task</Button>
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
