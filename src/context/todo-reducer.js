import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "./todo-actions";
const InitialState = {};
const TodoReducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO: {
      return {};
    }
    case TOGGLE_TODO: {
      return {};
    }
    case DELETE_TODO: {
      return {};
    }
    default:
      return state;
  }
};

export default TodoReducer;
