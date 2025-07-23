import { useState } from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import "../Projects.css";

function App() {
  const [todos, setTodo] = useState([]);
  const [makeTodo, setMakeTodo] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  function submitTodo(e) {
    e.preventDefault();
    const trimmedTodo = makeTodo.trim();
    if (editIndex !== null) {
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = trimmedTodo;
      setTodo(updatedTodos);
      setEditIndex(null);
      setMakeTodo("");
    } else if (trimmedTodo !== "") {
      setTodo([...todos, trimmedTodo]);
      setMakeTodo("");
    } else {
      console.log("Some mistake");
    }
  }

  function resetTodos() {
    if (confirm("Do you want to delete the todos") == true) {
      setTodo([]);
    } else {
      console.log("You canceled");
    }
  }

  function deleteTodo(id) {
    setTodo(todos.filter((_, index) => index !== id));
  }

  function editTodo(id) {
    setMakeTodo(todos[id]);
    setEditIndex(id);
  }

  return (
    <>
      <div className="xl:w-[60%] xl:mx-auto">
        <h2 className="text-2xl ml-6 my-3 xl:text-center font-bold">To do List</h2>
        <form className="border rounded-md w-[80%] mx-auto flex flex-col p-3">
          <label htmlFor="to-do" className="text-4">
            Enter To Do
          </label>
          <input
            type="text"
            className="border p-2 mt-1 rounded-md"
            value={makeTodo}
            placeholder="Enter your todo"
            onChange={(e) => setMakeTodo(e.target.value)}
          />
          <div className="flex sm:flex-row gap-2">
            <input
              type="submit"
              className="w-[95%] bg-sky-500 mx-auto mt-2 py-1 font-bold text-white rounded-xl cursor-pointer"
              onClick={submitTodo}
            />

            <button
              type="button"
              onClick={resetTodos}
              className="w-[95%] bg-red-500 mx-auto mt-2 py-1 font-bold text-white rounded-xl cursor-pointer"
            >
              Delete Todo's
            </button>
          </div>
        </form>
        <table className="todo border w-[80%] mx-auto mt-8 rounded-2xl">
          <thead>
            <tr>
              <th className="border">Todo</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((item, index) => (
              <tr key={index}>
                <td className="w-[80%]">{item}</td>
                <td>
                  <button
                    className="table_btn bg-sky-500"
                    onClick={() => editTodo(index)}
                  >
                    <MdEdit />
                  </button>
                </td>
                <td>
                  <button
                    className="table_btn bg-red-500"
                    onClick={() => deleteTodo(index)}
                  >
                    <MdDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
