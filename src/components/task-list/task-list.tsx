import { Task } from '../../types';
import TaskItem from '../task-item/task-item';

interface IProps {
  tasks: Task[];
  onUpdate: (id: number, text: string) => void;
  onDelete: (id: number) => void;
}

function TaskList({ tasks, onDelete, onUpdate }: IProps) {
  return (
    <div className='space-y-2'>
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
}

export default TaskList;
