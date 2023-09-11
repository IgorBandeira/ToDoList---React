import React, { useState } from "react";
import Button from "../Button/Button";
import "./AddTask.css";

const AddTask = ({ handleTaskAdition }) => {
  const [inputData, settInputdata] = useState("");
  const hanleInputChange = (e) => {
    settInputdata(e.target.value);
  };
  const handleTaskClick = () => {
    handleTaskAdition(inputData);
  };

  return (
    <div className="add-task-container">
      <input
        onChange={hanleInputChange}
        value={inputData}
        className="add-task-input"
        type="text"
      />
      <div className="add-task-button-container">
        <Button onClick={handleTaskClick}>Add</Button>
      </div>
    </div>
  );
};

export default AddTask;
