import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import Button from "../Button/Button";
import "./TaskDetails.css";

const TaskDetails = () => {
  const { taskTitle } = useParams();
  const history = useHistory();

  const [description, setDescription] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem(`description-${taskTitle}`);
    if (saved) setDescription(saved);
  }, [taskTitle]);

  const handleBackButtonClick = () => {
    history.goBack();
  };

  const handleSave = () => {
    localStorage.setItem(`description-${taskTitle}`, description);
    history.goBack();
  };

  return (
    <>
      <div className="back-button-container">
        <Button onClick={handleBackButtonClick}>Voltar</Button>
      </div>

      <div className="task-details-container">
        <h2>{taskTitle}</h2>

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Escreva os detalhes da task..."
          className="task-textarea"
        />

        <Button onClick={handleSave}>Salvar</Button>
      </div>
    </>
  );
};

export default TaskDetails;
