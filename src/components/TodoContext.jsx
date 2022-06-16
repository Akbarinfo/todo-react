import React, { createContext, useReducer, useState } from "react";
import Todo from "./Todo";

export const todosContext = createContext();

export default function TodoContext() {

  const [name, setName] = useState('')

  const reducer = (state, action) => {
    console.log(action)
    switch(action.type) {
      case 'ADD':
        return[...state, {id: new Date().getTime(), name: action.payload.name, complate: false}];
      case "toggle":
        return state.map((todo) => {
          if(todo.id === action.payload.id) {
            return{...todo, complate: ! todo.complate}
          }
          return todo
        })
      case "del":
        return state.filter((item) => item.id !== action.payload.id)
      default: return state
    }
  }

  const handlerSubmit = (e) => {
    e.preventDefault()
    dispatch({type: "ADD", payload: {name: name}})
    e.target.reset()
  }

  const [todos, dispatch] = useReducer(reducer,[])

  return(
    <div className="todo__box">
      <div className="todo__header">
        <h1 className="todo__title">Todo List
        </h1>
        <span className="todo__info">Get things done, one item at a time.</span>
      </div>

      <div className="todo__search">
        <label htmlFor="text">
          <input className="todo__input" type="search" name="text" id="search" placeholder="Search" required />
        </label>
      </div>

      <ul className="todo__list">
        {
          todos.map((item, key) => (
            <todosContext.Provider key={key+85}
            value={{item, dispatch}}>
              <Todo />

            </todosContext.Provider>
          ))
        }
      </ul>

      <div className="todo__all">
        <button className="todo__btns" id="id-all" type="button">All</button>
        <button className="todo__btns" id="id-com" type="button">Complete</button>
        <button className="todo__btns" id="id-incom" type="button">Incomplete</button>
      </div>


      <div className="todo__main">
      <h2 className="todo__subtitle">Add to the todo list</h2>

      <form className="todo__form" onSubmit={handlerSubmit}>
        <label htmlFor="text">
          <input
            className="todo__input"
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="" required />
          <button className="todo__btn" type="submit">Add Item</button>
        </label>
      </form>
      </div>
    </div>
  )
}