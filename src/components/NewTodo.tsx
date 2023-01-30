import classes from './NewTodo.module.css';

import React, { useContext, useRef } from 'react';
import { todosContext, TodoCtx } from '../store/todos-context';

const NewTodo: React.FC = () => {
  const todosCtx: TodoCtx = useContext(todosContext);

  const contentInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    let enteredText = contentInputRef?.current?.value;

    if (enteredText?.trim().length === 0) {
      // throw an error
      return;
    }

    todosCtx.addTodo(enteredText);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor='text'>Todo text</label>
      <input id='text' type='text' ref={contentInputRef}/>
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;