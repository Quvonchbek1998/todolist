import React from "react";
import { ITodo } from "../interfaces";

type TodoListProps = {
  todos: ITodo[];
  onToggle(id: number): void;
  onRemove: (id: number) => void;
};

export const TodoList: React.FC<TodoListProps> = ({

  todos,
  onToggle,
  onRemove,
}) => {
  if (todos.length === 0) {
    return <p className="center">To-do list is empty!</p>;
  }

  const removeHeandler = (event: React.MouseEvent, id: number) => {
    onRemove(id);
  };

  return (
    <ul>
      {todos.map((todo) => {
        const classes = ["todo"];
        if (todo.completed) {
          classes.push("completed");
        }
        return (
          <li className={classes.join(" ")} key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={onToggle.bind(null, todo.id)}
              />
              <span>{todo.title}</span>
              <i
                className="material-icons red-text"
                onClick={(event) => removeHeandler(event, todo.id)}
              >
                {" "}
                delete{" "}
              </i>
            </label>
          </li>
        );
      })}
    </ul>
  );
};
