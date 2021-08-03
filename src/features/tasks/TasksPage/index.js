import {useDispatch } from "react-redux";
import { Wrapper } from "../../../styled.js";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import Form from "./Form";
import Buttons from "./Buttons";
import TasksList from "./TasksList";
import Search from "./Search/index.js";
import ExampleTaskButton from "./ExampleTaskButton";

function TasksPage() {
  return (
    <Wrapper>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        extraHeaderContent={
          <ExampleTaskButton />
        }
        body={<Form />}
      />
      <Section
        title="Wyszukiwarka"
        body={<Search />}
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