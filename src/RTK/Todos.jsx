import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllTodos, addTodo } from "./TodosSlice";
import { DisplayComponent } from "./DisplayComponent";

function Todos() {
  const {
    getAllTodos: { todos },
    loading,
  } = useSelector((state) => state);

  const dispatch = useDispatch();
  console.log("Todos useDispatch=====", todos)
  
  const handleTodo = () => {
    dispatch(addTodo({
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    }))
  }

  useEffect(() => {
    dispatch(getAllTodos());
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h2>****TODOS****</h2>
      <br />
      <button onClick={handleTodo}>Add todo</button>
      <br />
      <br />
      <br />
      <React.Fragment key={Math.random()}>
        {todos.map((item, index) => (
          <DisplayComponent key={index} {...item} />
        ))}
      </React.Fragment>
    </div>
  );
}

export default Todos;
