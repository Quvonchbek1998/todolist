import React, { useState, useEffect } from "react";
import { TodoForm } from "../components/TodoForm";
import { TodoList } from "../components/TodoList";
import { ITodo } from "../interfaces";

// declare var confirm: (question: string) => boolean;

export const TodosPage: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("todos") || "[]") as ITodo[];

    setTodos(saved);
  }, []);

 

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false,
    };

    setTodos((prev) => {
      localStorage.setItem("todos", JSON.stringify([newTodo, ...prev]));
      return [newTodo, ...prev]
    });
    

  };






  const toggleHandler = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  const removeHandler = (id: number) => {
    // const shouldRemove = confirm("Вы уверены, что хотите удалить элемент?");
    // if (shouldRemove) {
    setTodos((prev) => {
      const filterTodos=prev.filter((todo) => todo.id !== id)
      localStorage.setItem("todos", JSON.stringify(filterTodos) );
      return filterTodos
    });
    // }
  };
  return (
    <React.Fragment>
      <TodoForm onAdd={addHandler} />
      <TodoList
        todos={todos}
        onToggle={toggleHandler}
        onRemove={removeHandler}
      />
    </React.Fragment>
  );
};
