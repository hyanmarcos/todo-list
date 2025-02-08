import { createContext, useEffect, useState } from "react";

export interface Task {
  id: number;
  title: string;
  done: boolean;
}

interface TasksContextData {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export const TasksContext = createContext({} as TasksContextData);

interface TasksProviderProps {
  children: React.ReactNode;
}

export const TasksProvider: React.FC<TasksProviderProps> = ({ children }) => {
  const [tasks, setTasks] = useState([] as Task[]);

  // função para carregar tarefas do localStorage
  useEffect(() => {
    const tasksOnLocalStorage = localStorage.getItem("tasks");

    if (tasksOnLocalStorage) {
      setTasks(JSON.parse(tasksOnLocalStorage));
    }
  }, []);

  return (
    <TasksContext.Provider
      value={{
        tasks,
        setTasks,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
