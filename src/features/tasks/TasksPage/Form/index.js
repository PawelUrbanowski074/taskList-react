import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addTask } from "../../tasksSlice";
import { StyledForm, Button } from "./styled";
import Input from "../Input";

const Form = () => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const dispatch = useDispatch();

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

    dispatch((addTask({
      content: trimmedNewTaskConetent,
      done: false,
      id: nanoid(),
    })));

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