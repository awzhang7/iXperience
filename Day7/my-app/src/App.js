import React, { useState } from 'react';
// import bootstrap styling from node_modules
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'

import './App.css';

// import the Task class from the models folder
import { Task } from './models/task';

// import components from components folder
import TaskInput from './components/TaskInput';
import TaskTable from './components/TaskTable';

export default function App() {

  const [tasks, setTasks] = useState([]);

  function onTaskCreate(name) {
    // create the task
    const task = new Task(
      new Date().getTime(),
      name,
      false,
    )

    // add the task to the tasks state
    setTasks([...tasks, task]);
  }


  function onTaskCompleteToggle(taskId) {
    // toggle task completed state
    const taskToToggle = tasks.find((task) => task.id === taskId);
    taskToToggle.complete = !taskToToggle.complete;

    // update the tasks state with the new updates state
    setTasks(tasks.map((task) => {
      return task.id === taskId ? taskToToggle : task;
    }));
  }

  function onTaskRemove(taskId) {
    // update the tasks state with the filtered tasks
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  return (
    <div className='container my-4'>

      <div className='card card-body text-center'>

        <h1>Task List</h1>

        <hr></hr>

        <p>Our simple task list</p>

        <TaskInput onTaskCreate={onTaskCreate} />

        <TaskTable
          onTaskCompleteToggle={onTaskCompleteToggle}
          onTaskRemove={onTaskRemove}
          tasks={tasks} />
      </div>
    </div>
  );
}