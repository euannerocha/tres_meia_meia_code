import React, { useState } from "react";

export interface Task {
  id: number;
  title: string;
  subtasks: Task[];
}

interface TaskProps {
  task: Task;
  onAddSubtask: (taskId: number, subtaskTitle: string) => void;
}

export const TaskComponent: React.FC<TaskProps> = ({ task, onAddSubtask }) => {
  const [newSubtaskTitle, setNewSubtaskTitle] = useState<string>("");

  const handleAddSubtask = () => {
    if (newSubtaskTitle.trim() !== "") {
      onAddSubtask(task.id, newSubtaskTitle);
      setNewSubtaskTitle("");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewSubtaskTitle(e.target.value);
  };

  return (
    <div>
      <div>{task.title}</div>
      <ul>
        {task.subtasks.map((subtask) => (
          <li key={subtask.id}>{subtask.title}</li>
        ))}
      </ul>
      <div>
        <input type="text" value={newSubtaskTitle} onChange={handleChange} />
        <button onClick={handleAddSubtask}>Add Subtask</button>
      </div>
    </div>
  );
};
