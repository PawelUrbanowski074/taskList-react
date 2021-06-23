import { useState } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();

    const trimmedNewTaskConetent = newTaskContent.trim();

    if (!trimmedNewTaskConetent) {
      return;
    }

    addNewTask(trimmedNewTaskConetent);
    setNewTaskContent("");
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <input
        autoFocus
        value={newTaskContent}
        className="form__input"
        placeholder="Co jest do zrobienia?"
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <button className="form__button">Dodaj zadanie</button>
    </form>
  )
};

export default Form;