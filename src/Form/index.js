import { useState } from "react";
import { FormContainer, Input, Button } from "./styled";

const Form = ({ addNewTask, focusInput, inputRef }) => {
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
    <FormContainer onSubmit={onFormSubmit}>
      <Input
        autoFocus
        value={newTaskContent}
        placeholder="Co jest do zrobienia?"
        onChange={({ target }) => setNewTaskContent(target.value)}
        ref={inputRef}
      />
      <Button onClick={focusInput}>Dodaj zadanie</Button>
    </FormContainer>
  )
};

export default Form;