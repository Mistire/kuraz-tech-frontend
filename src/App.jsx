import { useState } from 'react'
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskFilter from './components/TaskFilter';
import React from 'react'

const intialTask = [
  { id: 1, title: "Buy groceries", completed: false },
  { id: 2, title: "Read a book", completed: true },
];


const App = () => {
  const [tasks, setTasks] = useState(intialTask);
  const [filter, setFilter] = useState("all");
  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
  if (filter === "pending") return !task.completed;
  return true;
  })
  const addTask = (title) => {
    const newTask = {
      id:Date.now(),
      title, 
      completed: false,
    };
    setTasks((prev) => [newTask, ...prev]);
  };

  const toggleTask = (id) => {
    setTasks((prev) => prev.map((task) => task.id === id ? {...task, completed: !task.completed} : task ))
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id))
  }
  return (
    <div className='mx-auto mt-10 px-4 max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl'>
      <h1 className="text-2xl font-bold mb-4 text-center">My Task List</h1>
      <TaskForm onAdd={addTask}/>
      <TaskFilter currentFilter={filter} onChange={setFilter}/>
      <TaskList tasks={filteredTasks} onToggle={toggleTask} onDelete={deleteTask}/>
    </div>
  )
}

export default App