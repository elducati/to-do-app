import React from "react";
import ReactDom from "react-dom";
const ToDoItem = (props) => {
    return (
        <div className="todo-item">
            <input type="checkbox" checked={props.item.completed}/>
            <p>{props.item.text}</p>
        </div>
    );

}
export default ToDoItem;