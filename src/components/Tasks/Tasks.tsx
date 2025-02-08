import { FormEvent, useState, useContext } from "react";
import styles from "./styles.module.scss";
import { TasksContext } from "../../context/TasksContext";

export const Tasks: React.FC = () => {
  const [taskTitle, setTaskTitle] = useState("");

  const { tasks, setTasks } = useContext(TasksContext);

  // função para adicionar tarefa
  function handleSubmitAddTask(event: FormEvent) {
    event.preventDefault();

    if (taskTitle.length < 3) {
      alert("Não é possível adicionar uma tarefa com menos de 3 caracteres");
      return;
    }

    // adicionar tarefa
    const newTasks = [
      ...tasks, //pega todas as tarefas que já existiam e coloca no valor do estado de tarefas
      { id: new Date().getTime(), title: taskTitle, done: false }, //adiciona a nova tarefa
    ];

    setTasks(newTasks); //atualiza o estado de tarefas
    localStorage.setItem("tasks", JSON.stringify(newTasks)); //salva as tarefas no localStorage. obs o localStorage só aceita strings, por isso o JSON.stringify.

    setTaskTitle(""); //limpa o campo de texto
  }

  function handleToggleTaskStatus(taskId: number) {
    const newTasks = tasks.map((task) => {
      if (taskId === task.id) {
        return {
          ...task,
          done: !task.done,
        };
      }
      return task;
    });

    setTasks(newTasks);
  }

  // Utilizar o filter para remover a tarefa do array de tarefas
  function handleRemoveTask(taskId: string) {}

  return (
    <section className={styles.container}>
      <form onSubmit={handleSubmitAddTask}>
        <div>
          <label htmlFor="task-title">Adicionar Tarefa</label>
          <input
            value={taskTitle}
            onChange={(event) => setTaskTitle(event.target.value)}
            type="text"
            id="task-title"
            placeholder="Título da Tarefa"
          />
        </div>

        <button type="submit">Adicionar Tarefa</button>
      </form>

      <ul>
        {tasks.map((task) => {
          return (
            <li key={task.id}>
              <input
                type="checkbox"
                id={`task-${task.id}`}
                onChange={() => handleToggleTaskStatus(task.id)}
              />
              <label
                className={task.done ? styles.done : ""}
                htmlFor={`task-${task.id}`}
              >
                {task.title}
              </label>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
