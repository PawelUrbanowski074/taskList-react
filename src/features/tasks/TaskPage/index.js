import { useParams } from "react-router-dom"; 
import { Wrapper } from "../../../styled.js";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice.js";

function TaskPage() {
const { id } = useParams();
const task = useSelector( state => getTaskById(state, id));

  return (
    <Wrapper>
      <Header title="Szczegóły zadania" />
      <Section
        title={task ? task.content : " Nie znaleziono zadania... "}
        body=
        {<> <strong>Ukończono: </strong> {task.done ? "Tak" : "Nie"} </>
        }
      />
    </Wrapper>
  );
}

export default TaskPage;