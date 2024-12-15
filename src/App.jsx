import { useState } from "react";
import "./App.css";
import Popup from "./components/Popup";
function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>Danh sách công việc</h1>

      <AddTodo onAdd={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

function AddTodo({ onAdd }) {
  const [inputValue, setInputValue] = useState("");
  const [showPopupAdd, setShowPopupAdd] = useState(false);

  const handleAdd = () => {
    if (inputValue.trim()) {
      onAdd(inputValue);
      setInputValue("");
      setShowPopupAdd(true);
    }
  };

  const cancelPopup = () => {
    setShowPopupAdd(false);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Nhập công việc mới"
      />
      <button onClick={handleAdd}>Thêm</button>
      {showPopupAdd && (
        <Popup
          type="alert"
          message={`Add Successfully!`}
          onCancel={cancelPopup}
        />
      )}
    </div>
  );
}
function TodoList({ todos, deleteTodo }) {
  const [showPopupDel, setShowPopupDel] = useState(false);
  const [deletedIndex, setDeletedIndex] = useState(-1);
  const cancelPopupDel = () => {
    setShowPopupDel(false);
  };

  const confirmDelete = (index) => {
    setShowPopupDel(true);
    setDeletedIndex(index);
  };

  const handleDeleteTodo = () => {
    setShowPopupDel(false);
    deleteTodo(deletedIndex);
  };
  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <div key={index}>
            <TodoItem todo={todo} />
            <button onClick={() => confirmDelete(index)}>Xóa</button>
            {showPopupDel && (
              <Popup
                type="confirm"
                message={`Are you sure you want to delete "${todo}"?`}
                onConfirm={handleDeleteTodo}
                onCancel={cancelPopupDel}
              />
            )}
          </div>
        ))}
      </ul>
    </div>
  );
}

function TodoItem({ todo }) {
  return <li>{todo}</li>;
}

export default App;
