import { Task, TaskComponent } from "./dia_setenta_e_tres";

interface TaskListProps {
  tasks: Task[];
  onAddSubtask: (taskId: number, subtaskTitle: string) => void;
}

export const TaskListComponent: React.FC<TaskListProps> = ({
  tasks,
  onAddSubtask,
}) => {
  return (
    <div>
      {tasks.map((task) => (
        <TaskComponent key={task.id} task={task} onAddSubtask={onAddSubtask} />
      ))}
    </div>
  );
};
