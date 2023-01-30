import React, { useRef } from 'react';
import classes from './NewTodo.module.css';

const NewTodo: React.FC<{onAddTodo: (text: string) => void }> = (props: any) => {
  const contentInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    let enteredText = contentInputRef?.current?.value;
    // console.log(contentInputRef.current?.value);
    if (enteredText?.trim().length === 0) {
      // throw an error
      return;
    }
    // console.log(enteredText);
    props.onAddTodo(enteredText);
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