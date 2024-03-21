import { useEffect, useState } from 'react';
import './App.css';
import { Task } from './types';
import TasksForm from './components/tasks-form/tasks-form';
import TaskList from './components/task-list/task-list';
import { getMoreElements } from './lib/items';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    getMoreElements(0, 20).then((elements) => setTasks(elements));
  }, []);

  const onfetch = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    getMoreElements(tasks.length, 20).then((elements) => {
      console.log(tasks.length, tasks);
      setTasks((prevTasks) => {
        return [...prevTasks, ...elements];
      });
    });
  };

  const handleAddTask = (text: string) => {
    setTasks((prevTasks) => [...prevTasks, { id: prevTasks.length + 1, text }]);
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
      <button onClick={onfetch}>wash</button>
      <TasksForm onAdd={handleAddTask} />
      <TaskList
        tasks={tasks}
        onDelete={handleDeleteTask}
        onUpdate={handleUpdateTask}
        onFetch={onfetch}
      />
    </div>
  );
}

export default App;
