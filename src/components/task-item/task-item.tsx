import { useState, ChangeEvent } from 'react';
import { Task } from '../../types';

interface IProps {
  task: Task;
  onDelete: (id: number) => void;
  onUpdate: (id: number, text: string) => void;
}

function TaskItem({ task, onDelete, onUpdate }: IProps) {
  const [count, setCount] = useState(0);
  const [updating, setUpdating] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleUpdateClick = () => {
    setUpdating(!updating);
  };

  const handleSaveClick = () => {
    setUpdating(false);
    onUpdate(task.id, newText);
    setNewText('');
  };

  const handleDeleteClick = () => {
    onDelete(task.id);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewText(e.target.value);
  };

  if (updating) {
    return (
      <div className='border border-gray-300 rounded-md p-4'>
        <input
          type='text'
          value={newText}
          onChange={handleInputChange}
          className='border border-gray-300 rounded-md px-2 py-1'
        />
        <button
          onClick={handleSaveClick}
          className='bg-blue-500 text-white px-2 py-1 rounded-md ml-2'
        >
          Save
        </button>
      </div>
    );
  }
  return (
    <div className='border border-gray-300 rounded-md p-4'>
      <p className='py-4 font-light text-lg leading-relaxed'>{task.text}</p>
      <button
        onClick={handleUpdateClick}
        className='bg-blue-500 text-white px-2 py-1 rounded-md'
      >
        Update
      </button>
      <button
        onClick={handleDeleteClick}
        className='bg-red-500 text-white px-2 py-1 rounded-md ml-2'
      >
        Delete
      </button>
      <button
        onClick={() => setCount(count + 1)}
        className='bg-green-500 text-white px-2 py-1 rounded-md ml-2'
      >
        Click me
      </button>
      <p className='py-4 font-light text-lg leading-relaxed'>Count: {count}</p>
    </div>
  );
}

export default TaskItem;
