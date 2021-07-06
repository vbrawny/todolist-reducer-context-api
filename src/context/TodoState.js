import React, { useReducer } from "react";
import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "./todo-actions";
import TodoContext from "./todo-context";
import TodoReducer from "./todo-reducer";
const TodoState = (props) => {
  const initialState = {
    todos: [] //{id:'123',text:'Some Text',complete:false},
  };
  const [state, dispatch] = useReducer(TodoReducer, initialState);

  //Add Todo
  const addTodo = (todo) => {
    dispatch({
      type: ADD_TODO,
      payload: todo
    });
  };
  //Toggle Todo
  const toggleTodo = (todoID) => {
    dispatch({
      type: TOGGLE_TODO,
      payload: todoID
    });
  };
  //Delete Todo
  const deleteTodo = (todoID) => {
    dispatch({
      type: DELETE_TODO,
      payload: todoID
    });
  };
  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        addTodo,
        toggleTodo,
        deleteTodo
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoState;
