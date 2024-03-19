import { useState } from 'react';
import './App.css';
import { Task } from './types';
import TasksForm from './components/tasks-form/tasks-form';
import TaskList from './components/task-list/task-list';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddTask = (text: string) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: prevTasks.length + 1, text },
    ]);
  };

  const handleDeleteTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const handleUpdateTask = (id: number, text: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === id ? { ...task, text } : task))
    );
  };

  return (
    <div className='max-w-[70vw] mx-auto mt-16'>
      <TasksForm onAdd={handleAddTask} />
      <TaskList
        tasks={tasks}
        onDelete={handleDeleteTask}
        onUpdate={handleUpdateTask}
      />
    </div>
  );
}

export default App;
