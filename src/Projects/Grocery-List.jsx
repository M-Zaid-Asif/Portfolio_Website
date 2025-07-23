import { useState } from "react";

function App() {
  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState("");
  const [lists, setList] = useState([]);
  const [editId, setEditId] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    const newItem = {
      id: editId || Date.now(),
      Item: item,
      Quantity: quantity,
    };

    if (editId) {
      setList(lists.map((list) => (list.id === editId ? newItem : list)));
      setEditId(null);
    } else {
      setList([...lists, newItem]);
    }

    setItem("");
    setQuantity("");
  }

  function deleteItem(id) {
    setList(lists.filter((list) => list.id !== id));
  }

  function editItem(id) {
    const toEdit = lists.find((list) => list.id === id);
    if (toEdit) {
      setItem(toEdit.Item);
      setQuantity(toEdit.Quantity);
      setEditId(id);
    }
  }

  return (
    <>
      <h2 className="text-xl m-2 font-bold md:text-center">Grocery List</h2>
      <form
        className="border w-[80%] xl:w-[60%] mx-auto flex gap-2 flex-col px-2 py-4 my-5"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="item">Enter Item</label>
          <input
            type="text"
            name="item"
            id="item"
            className="border rounded-md p-1"
            value={item}
            onChange={(e) => setItem(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="quantity">Quantity</label>
          <input
            type="number"
            id="quantity"
            step="any"
            min={0}
            max={100}
            className="border rounded-md p-1"
            onChange={(e) => setQuantity(e.target.value)}
            value={quantity}
            required
          />
        </div>
        <input
          type="submit"
          value="Add Into List"
          className="bg-sky-500 py-1 text-white font-bold cursor-pointer rounded-md mt-2"
        />
      </form>
      <table className="border w-[80%] xl:w-[60%] mx-auto mt-3">
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {lists.map((list) => (
            <tr key={list.id}>
              <td>{list.Item}</td>
              <td>{list.Quantity}</td>
              <td>
                <button
                  className="btn_list bg-sky-600"
                  onClick={() => editItem(list.id)}
                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  className="btn_list bg-red-600"
                  onClick={() => deleteItem(list.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </>
  );
}

export default App;
