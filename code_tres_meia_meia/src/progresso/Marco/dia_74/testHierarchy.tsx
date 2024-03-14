import { useState } from "react";
import { ITask } from "./dia_setenta_e_quatro";
import { TaskList } from "./taskList";

export const TaskHierarchy: React.FC<{ tasks: ITask[] }> = ({ tasks }) => {
  const [taskList, setTaskList] = useState<ITask[]>(tasks);

  const handleToggle = (taskId: number) => {
    const updatedTaskList = taskList.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTaskList(updatedTaskList);
  };

  return (
    <div>
      <h2>Tarefas</h2>
      <TaskList tasks={taskList} onToggle={handleToggle} />
    </div>
  );
};
