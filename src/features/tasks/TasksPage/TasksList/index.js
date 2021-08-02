import { useSelector, useDispatch } from "react-redux";
import { selectTasks, removeTask, toggleTaskDone, selectHideDone } from "../../tasksSlice";
import { List, Item, Content, Button } from "./styled";
import { Link } from "react-router-dom";
const TasksList = () => {
  const tasks = useSelector(selectTasks);
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
            <Link to={`/zadania/${task.id}`}>{task.content}</Link>
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