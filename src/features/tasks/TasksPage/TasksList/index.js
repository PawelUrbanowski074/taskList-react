import { useSelector, useDispatch } from "react-redux";
import { removeTask, toggleTaskDone, selectHideDone, selectTaskByQuery } from "../../tasksSlice";
import { List, Item, Content, Button, StyledLink } from "./styled";
import { useLocation } from "react-router-dom";
import searchQueryParamName from "../searchQueryParamName";

const TasksList = () => {

  const location = useLocation();
  const query = (new URLSearchParams(location.search)).get(searchQueryParamName);

  const tasks = useSelector(state => selectTaskByQuery(state, query));
  const hideDone = useSelector(selectHideDone);

  const dispatch = useDispatch();

  return (
    <List>
      {tasks.map(task => (
        <Item
          key={task.id}
          hidden={task.done && hideDone}
        >
          <Button
            onClick={() => dispatch(toggleTaskDone(task.id))}
            toggleDone
          >
            <span>{task.done ? "✔" : ""}</span>
          </Button>
          <Content done={task.done}>
            <StyledLink to={`/zadania/${task.id}`}>{task.content}</StyledLink>
          </Content>
          <Button
            onClick={() => dispatch(removeTask(task.id))}
            remove
          >
            🗑
          </Button>
        </Item>
      ))}
    </List>
  )
};

export default TasksList;