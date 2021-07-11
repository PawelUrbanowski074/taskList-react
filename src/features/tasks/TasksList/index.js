import { List, Item, Content, Button } from "./styled";

const TasksList = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
  <List>
    {tasks.map(task => (
      <Item
        key={task.id}
        hidden={task.done && hideDone}
      >
        <Button
          onClick={() => toggleTaskDone(task.id)}
          toggleDone
        >
          <span>{task.done ? "✔" : ""}</span>
        </Button>
        <Content done={task.done}>
          {task.content}
        </Content>
        <Button
          onClick={() => removeTask(task.id)}
          remove
        >
          🗑
        </Button>
      </Item>
    ))}
  </List>
);

export default TasksList;