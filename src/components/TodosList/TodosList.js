import React from 'react'
import './TodosList.css'
import SingleTodo from '../SingleTodo/SingleTodo'
const TodosList = ({ todos, setTodos }) => {

  let pointsScored = 0;
  let yourRating = 0;
  let cards=0;

  for (let i = 0; i < todos.length; i++) {
    if (todos[i].checked) {
      pointsScored += todos[i].points;
      cards++;
    }
  }
  cards=cards-1;

  yourRating = Math.round(pointsScored /cards);


  // console.log(pointsScored);

  let totalPoints = 0;

  totalPoints = todos.reduce((points, todo) => points += todo.points, 0)


  const filterTodos = (id) => {
    const filteredItems = todos.filter((todo) => id !== todo.id);
    setTodos(filteredItems);
  }
  const reOrderAndStrike = (id) => {
    // console.log(todos, "initial");
    let newArr = todos.map((todo) => todo.id === id ? { ...todo, checked: !todo.checked } : todo);
    setTodos(newArr);

    // console.log(newArr, "after update");
  }
  let totalRating = Math.round(totalPoints/todos.length);
  let averageRating = Math.round(yourRating/totalRating)
  return (
    <div className="todos-list">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0px 20px" }}>
        <h1>Todos List - {todos.length}</h1>
        <div style={{display : "flex",justifyContent: "space-between",gap : "20px"}}>
          <h4>Average Rating : {averageRating}</h4>
          <h4>Points Scored : {pointsScored}/{totalPoints}</h4>
        </div>
      </div>
      {todos.length > 0 ? todos.map((todo) =>
        <div key={todo.id}>
          <SingleTodo todo={todo} key={todo.id} filterTodos={filterTodos} reOrderAndStrike={reOrderAndStrike} />
        </div>
      ) : <h2>No Items To Display</h2>}
    </div>
  )
}

export default TodosList
