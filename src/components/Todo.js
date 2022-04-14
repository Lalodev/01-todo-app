import React from "react";

const Todo = ({ todo, todoDelete, todoToggleCompleted, setTodoEdit }) => {
  //const { todo } = props;

  return (
    <div className="card mt-2">
      <div className="card-body">
        <h3 className="card-title text-end">
          {todo.title}
          <button
            onClick={() => todoToggleCompleted(todo.id)}
            className={`btn btn-sm ${
              todo.completed ? "btn-outline-success" : "btn-success"
            } ms-2`}
          >
            {todo.completed ? "Terminado" : "Terminar"}
          </button>
        </h3>
        <p className="card-text text-end">{todo.description}</p>
        <hr />
        <div className="d-flex justify-content-end">
          <button
            onClick={() => setTodoEdit(todo)}
            className="btn btn-sm btn-outline-primary me-2"
          >
            Editar
          </button>
          <button
            onClick={() => todoDelete(todo.id)}
            className="btn btn-sm btn-outline-danger"
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
