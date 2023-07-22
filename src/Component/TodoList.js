import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo, toggleTodo, deleteTodo } from "../redux/action";

const TodoList = ({ todos, addTodo }) => {
//   const [newTodo, setNewTodo] = useState("");

//   const handleAddTodo = () => {
//     if (newTodo.trim() !== "") {
//       addTodo(newTodo);
//       setNewTodo("");
//     }
//   };
console.log('Check data',todos);

  return (
    <h1>Dcm cuoc doi</h1>
    // <div>
    //   <input
    //     type="text"
    //     value={newTodo}
    //     onChange={(e) => setNewTodo(e.target.value)}
    //   />
    //   <button onClick={handleAddTodo}>Add Todo</button>
    //   <ul>
    //     {todos.map((todo) => (
    //       <li key={todo.id}>
    //         <span
    //           style={{ textDecoration: todo.completed ? "line-through" : "none" }}
    //           onClick={() => toggleTodo(todo.id)}
    //         >
    //           {todo.text}
    //         </span>
    //         <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    //       </li>
    //     ))}
    //   </ul>
    // </div>
  );
};

const mapStateToProps = (state) => ({
    todos: state.todos,
});

export default connect(mapStateToProps, { addTodo })(TodoList);
