import React from "react";
import { useContext } from "react";
import { todosContext } from "./TodoContext";

export default function Todo() {
  const todolist = useContext(todosContext);
  return(
  <li className="todo__item incomplete">

    <p style={{opacity: todolist.item.complate ? "0.5" : "1"}} className="todo__text">{todolist.item.name}</p>
    <span className="todo__right">
      <button onClick={() => todolist.dispatch({type: "toggle", payload: {id: todolist.item.id} })} className="btn todo__checkbox">
        <i className={`bx todo__iconcheck ${todolist.item.complate ? "bxs-checkbox-checked" : "bx-checkbox"}`} />
      </button>
      <button onClick={() => todolist.dispatch({type: "del", payload: {id: todolist.item.id}})} className="btn todo__delete">
        <i className="bx bx-trash-alt todo__icontrash" />
      </button>
    </span>
  </li>
  )
}