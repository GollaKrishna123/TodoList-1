import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import TodosList from './components/TodosList/TodosList';
import logo from './logo.svg';
import mockData from './mockData'
import { useState } from 'react';
import AddTodo from './components/AddTodo/AddTodo';


function App() {
  const [todos, setTodos] = useState(mockData);
  return (
    <div className="App">
      <Navbar todos={todos} setTodos={setTodos}/>
      <AddTodo todos={todos} setTodos={setTodos}/>
      <TodosList todos={todos} setTodos={setTodos}/>
      <Footer/>
    </div>
  );
}

export default App;
