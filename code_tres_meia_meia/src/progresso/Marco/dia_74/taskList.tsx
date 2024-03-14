import { ITask, TaskItem } from "./dia_setenta_e_quatro";

export const TaskList: React.FC<{
  tasks: ITask[];
  onToggle: (taskId: number) => void;
}> = ({ tasks, onToggle }) => {
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onToggle={onToggle} />
      ))}
    </div>
  );
};
