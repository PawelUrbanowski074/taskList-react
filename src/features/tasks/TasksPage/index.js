import { Wrapper } from "../../../styled.js";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import Form from "./Form";
import Buttons from "./Buttons";
 import TasksList from "./TasksList";
import { useLocation } from "react-router-dom";

function TasksPage() {
const location = useLocation();
const searchParams = new URLSearchParams(location.search);
searchParams.get("szukaj");

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

export default TasksPage;