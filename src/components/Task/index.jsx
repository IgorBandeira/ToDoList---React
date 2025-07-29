import React from "react";
import { CgClose, CgInfo } from "react-icons/cg";
import { useHistory } from "react-router-dom";

import "./Task.css";

const Task = ({ task, handleCompleteClick, handleTaskDeletion }) => {
  const history = useHistory();
  const handleTaskDetailsClick = () => {
    history.push(`/${task.title}`);
  };

  return (
    <div
      className="task-container"
      style={task.completed ? { borderLeft: "10px solid #C146CD" } : {}}
      onClick={() => handleCompleteClick(task.id)}
    >
      <div className="task-title">{task.title}</div>
      <div className="buttons-container">
        <button
          className="remove-task-button"
          onClick={(e) => {
            e.stopPropagation();
            handleTaskDeletion(task.id);
          }}
        >
          <CgClose />
        </button>
        <button
          className="see-task-details-button"
          onClick={(e) => {
            e.stopPropagation();
            handleTaskDetailsClick();
          }}
        >
          <CgInfo />
        </button>
      </div>
    </div>
  );
};

export default Task;
