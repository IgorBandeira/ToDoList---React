import React from "react";
import Task from "../Task";
const Tasks = ({ tasks, handleCompleteClick, handleTaskDeletion }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          handleCompleteClick={handleCompleteClick}
          handleTaskDeletion={handleTaskDeletion}
        />
      ))}
    </>
  );
};
export default Tasks;
