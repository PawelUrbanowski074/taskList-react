import { useState } from "react";
import { useTasks } from "../../useTasks";
import { Wrapper } from "../../styled.js";
import Header from "../../common/Header";
import Section from "../../common/Section";
import Form from "./Form";
import Buttons from "./Buttons";
import TasksList from "./TasksList";

function Tasks() {
  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const {
    tasks,
    removeTask,
    toggleTaskDone,
    setAllDone,
    addNewTask,
  } = useTasks();

  return (
    <Wrapper>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={
          <Form
            addNewTask={addNewTask}
          />
        }
      />
      <Section
        title="Lista zadań"
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            setAllDone={setAllDone}
          />
        }
        body={
          <TasksList
            tasks={tasks}
            hideDone={hideDone}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />}
      />
    </Wrapper>
  );
}

export default Tasks;