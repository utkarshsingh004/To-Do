import { useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import History from "../History/History";
import "./Container.css";

function Container() {
  const [count, setCount] = useState([]); // Stores history items
  const [inputValue, setInputValue] = useState(""); // Stores input field value

  function addNew() {
    if (inputValue.trim() !== "") {
      setCount([...count, inputValue]); // Adds new input value to the list
      setInputValue(""); // Clear input field after adding
    }
  }

  function deleteItem(index) {
    setCount(count.filter((_, i) => i !== index)); // Removes item at given index
  }

  return (
    <>
      <h1 className="heading">To-Do</h1>
      <div className="containerWrapper">
        <div className="add">
          <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          <Button name="Add" disabled={inputValue.trim() === ""} click={addNew} col="green" />
        </div>

        {count.length > 0 && (
          <div className="historyContainer">
            {count.map((item, index) => (
              <div key={index} className="historyItem">
                <History text={item} />
                <Button name="Delete" col="red" click={() => deleteItem(index)} />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Container;
