import { Wrapper } from "../../styled.js";
import Header from "../../common/Header";
import Section from "../../common/Section";
import Form from "./Form";
import Buttons from "./Buttons";
import TasksList from "./TasksList";

function Tasks() {
  return (
    <Wrapper>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />
      <Section
        title="Lista zadań"
        extraHeaderContent={<Buttons />}
        body={<TasksList />}
      />
    </Wrapper>
  );
}

export default Tasks;