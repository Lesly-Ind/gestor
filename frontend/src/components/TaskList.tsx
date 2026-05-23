import React from "react"

import TaskItem from "./TaskItem"

import type { Task } from "../interfaces/Task"

interface Props {
  tasks: Task[]
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

function TaskList({ tasks, setTasks }: Props) {

  return (

    <div style={{ marginTop: 20 }}>

      {
        tasks.length === 0
          ? <p>No hay tareas</p>

          : tasks.map((task) => (

            <TaskItem
              key={task.id}
              task={task}
              tasks={tasks}
              setTasks={setTasks}
            />

          ))
      }

    </div>
  )
}

export default TaskList