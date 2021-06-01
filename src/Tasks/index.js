import "./style.css";

const Tasks = ({ tasks, hideCompletedTasks }) => (
  <ul className="tasks">
    {tasks.map(task => (
      <li
        key={tasks.id}
        className={`tasks__item ${task.done && hideCompletedTasks ? " task__item--hidden" : ""}`}
      >
        <button className={`tasks__button tasks__button--done`}>
          <span>{task.done ? "✔" : ""}</span>
        </button>
        <span
          className={`
            tasks__span ${task.done ? " tasks__span--done" : ""} 
          `}
        >
          {task.content}
        </span>
        <button className={`tasks__button tasks__button--remove`}>
          🗑
        </button>
      </li>
    ))}
  </ul>
);

export default Tasks;