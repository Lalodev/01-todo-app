import React, { useState } from "react";
import Todo from "./Todo";

/*const initialTodos = [
  {
    id: 1,
    title: "Todo #1",
    description: "Desc del Todo #1",
    completed: false,
  },
  {
    id: 2,
    title: "Todo #2",
    description: "Desc del Todo #2",
    completed: true,
  },
];*/

const TodoList = ({ todos, todoDelete, todoToggleCompleted, setTodoEdit }) => {
  //const [todos, setTodos] = useState(initialTodos); //todos
  //const todos = state[0];
  //const setTodos = state[1];

  return (
    <div>
      <h2 className="text-right display-4">Soy TodoList</h2>
      {todos.length === 0 ? (
        <div className="alert alert-primary">
          No hay tareas. Por favor agrega una{":)"}
        </div>
      ) : (
        todos.map((todo) => (
          <Todo
            todo={todo}
            key={todo.id}
            todoDelete={todoDelete}
            todoToggleCompleted={todoToggleCompleted}
            setTodoEdit={setTodoEdit}
          />
        ))
      )}
    </div>
  );
};

export default TodoList;
