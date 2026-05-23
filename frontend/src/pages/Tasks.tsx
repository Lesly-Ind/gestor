import React from "react"

import TaskForm from "../components/TaskForm"
import TaskList from "../components/TaskList"

import type { Task } from "../interfaces/Task"

interface Props {
  tasks: Task[]
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

function Tasks({ tasks, setTasks }: Props) {

  return (

    <div className="container">

      <h1 className="title">
        Gestión de tareas
      </h1>

      <TaskForm
        tasks={tasks}
        setTasks={setTasks}
      />

      <TaskList
        tasks={tasks}
        setTasks={setTasks}
      />

    </div>
  )
}

export default Tasks