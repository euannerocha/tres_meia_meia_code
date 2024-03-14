import React from "react";

export interface ITask {
  id: number;
  title: string;
  completed: boolean;
  level: number;
}

export const TaskItem: React.FC<{
  task: ITask;
  onToggle: (taskId: number) => void;
}> = ({ task, onToggle }) => {
  return (
    <div style={{ marginLeft: task.level * 20 }}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      <span>{task.title}</span>
    </div>
  );
};
