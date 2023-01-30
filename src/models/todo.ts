class Todo {
  constructor( todoText: string ) {
    this.text = todoText;
    // this.id = new Date().toISOString();
    this.id = Math.random().toString();
  }
  id: string;
  text: string;
};

// interface Todo {
//   id: string;
//   text: string;
// };

export default Todo;