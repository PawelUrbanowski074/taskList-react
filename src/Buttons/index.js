import "./style.css";

const Buttons = ({ tasks, hideCompletedTasks }) => (
  tasks.length > 0 && (
    <div className="buttons">
      <button
        className={`buttons__button`}
      >
        {hideCompletedTasks ? "Pokaż" : "Ukryj"} ukończone
      </button>
      <button
        className={`buttons__button`}
        disabled={tasks.every(({ done }) => done)}
      >
        Ukończ wszystkie
      </button>
    </div>
  )
);

export default Buttons;