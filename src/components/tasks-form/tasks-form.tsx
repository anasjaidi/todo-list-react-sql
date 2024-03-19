import React, { useState, FormEvent } from 'react';

interface Props {
  onAdd: (text: string) => void;
}

function TasksForm({ onAdd }: Props) {
  const [newTask, setNewTask] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!newTask) return;
    onAdd(newTask);
    setNewTask('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value);
  };

  return (
    <div className='bg-gray-100 py-12 flex justify-center items-center flex-col rounded-lg'>
      <h1 className='text-3xl font-semibold mb-6'>Todo List Project</h1>
      <form onSubmit={handleSubmit} className='flex items-center'>
        <input
          type='text'
          value={newTask}
          onChange={handleChange}
          className='border border-gray-300 rounded-l px-4 py-2 w-80 mx-3'
        />
        <button
          type='submit'
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r'
        >
          Add New Task
        </button>
      </form>
    </div>
  );
}

export default TasksForm;
