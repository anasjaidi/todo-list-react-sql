// import { useMemo } from 'react';
import { useMemo } from 'react';
import { Task } from '../../types';
import TaskItem from '../task-item/task-item';
import { ListVirtualization } from '@x1337/rlv';

interface IProps {
  tasks: Task[];
  onUpdate: (id: number, text: string) => void;
  onDelete: (id: number) => void;
  onFetch: () => Promise<void>;
}

function TaskList({ tasks, onDelete, onUpdate, onFetch }: IProps) {
  const tasksComponents = useMemo(() => {
    return tasks.map((task, index) => (
      <TaskItem
        key={index}
        task={task}
        onDelete={onDelete}
        onUpdate={onUpdate}
      />
    ));
  }, [tasks, onDelete, onUpdate]);

  return (
    <div className='space-y-2'>
      <ListVirtualization
        loadingIndicator={<div>Loading...</div>}
        items={tasksComponents}
        itemHeight={180}
        numberOfItems={2}
        fetchItems={onFetch}
      />
    </div>
  );
}

export default TaskList;
