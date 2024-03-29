import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import { Moon, Sun } from "lucide-react";

import Header from "./components/Header/index.jsx";
import AddTask from "./components/AddTask.js";
import Tasks from "./components/Tasks";
import TaskDetails from "./components/TaskDetails/index.jsx";

import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Estudar Programação",
      completed: false,
    },
    {
      id: "2",
      title: "Ler livros",
      completed: true,
    },
  ]);

  useEffect(() => {
    const fetchTasks = async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.cypress.io/todos?_limit=10"
      );
      setTasks(data);
    };
    fetchTasks();
  }, []);

  const handleCompleteClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) return { ...task, completed: !task.completed };
      return task;
    });
    setTasks(newTasks);
  };

  const handleTaskAdition = (taskTitle) => {
    const newTasks = [
      ...tasks,
      {
        title: taskTitle,
        id: Math.random(10),
        completed: false,
      },
    ];
    setTasks(newTasks);
  };

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  };

  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  useEffect(() => {
    const body = document.querySelector("body");
    if (isDarkTheme) {
      body.classList.add("dark-body");
      body.classList.remove("light-body");
    } else {
      body.classList.add("light-body");
      body.classList.remove("dark-body");
    }
  }, [isDarkTheme]);

  return (
    <Router>
      <i className="theme-toggle-button" onClick={toggleTheme}>
        {isDarkTheme ? (
          <Moon className="custom-icon" size={96} />
        ) : (
          <Sun className="custom-icon" size={96} />
        )}
      </i>

      <div className="container">
        <Header />
        <Route
          path="/"
          exact
          render={() => (
            <>
              <AddTask handleTaskAdition={handleTaskAdition} />
              <Tasks
                tasks={tasks}
                handleCompleteClick={handleCompleteClick}
                handleTaskDeletion={handleTaskDeletion}
              />
            </>
          )}
        />
        <Route path="/:taskTitle" exact component={TaskDetails} />
      </div>
    </Router>
  );
};

export default App;
