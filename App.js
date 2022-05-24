import React, { useState } from "react";
import ToDoList from "./ToDoLists";

const App = () => {

    const [inputList, setInputList] = useState("");
    const [Items, setItems] = useState([]); 

    const itemEvents = (event) => {
        setInputList(event.target.value);
    };

    const listofItem = () => {
        setItems((oldItems) => {
            return [...oldItems, inputList];
        });
        setInputList("");
    };

    return <>
    <div className="main_div">
        <div className="center_div">
            <br />
            <h1> ToDo List </h1>
            <br />
            <input type="text" placeholder="Add a Item"
            value={inputList}
            onChange={itemEvents} />
            <button onClick={listofItem}> + </button>

            <ol>
                {/* <li> {inputList} </li>*/}

                {Items.map((itemval) => {
                   return <ToDoList text={itemval} />;
                })}
            </ol>
        </div>
    </div>
    </>
};

export default App;
