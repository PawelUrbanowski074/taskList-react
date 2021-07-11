import { useState, useRef } from "react";
import { StyledForm, Input, Button } from "./styled";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);
  const focusInput = () => {
    inputRef.current.focus();
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const trimmedNewTaskConetent = newTaskContent.trim();

    if (!trimmedNewTaskConetent) {
      return;
    }

    addNewTask(trimmedNewTaskConetent);
    setNewTaskContent("");
    focusInput();
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Input
        value={newTaskContent}
        placeholder="Co jest do zrobienia?"
        onChange={({ target }) => setNewTaskContent(target.value)}
        ref={inputRef}
        autoFocus
      />
      <Button onClick={focusInput}>Dodaj zadanie</Button>
    </StyledForm>
  )
};

export default Form;