import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllTodos } from "./TodosSlice";
import { DisplayComponent } from "./DisplayComponent";

function Todos() {
  const {
    todos: { todos },
    loading,
  } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTodos());
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h2>****TODOS****</h2>
      <React.Fragment key={Math.random()}>
        {todos.map((item, index) => (
          <DisplayComponent key={index} {...item} />
        ))}
      </React.Fragment>
    </div>
  );
}

export default Todos;
