import React from "react"

import {
  Button,
  Card,
  Space
} from "antd"

import type { Task } from "../interfaces/Task"

interface Props {
  task: Task
  tasks: Task[]
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

function TaskItem({
  task,
  tasks,
  setTasks
}: Props) {

  const completeTask = () => {

    const updatedTasks =
      tasks.map((t) =>

        t.id === task.id
          ? {
              ...t,
              completed: !t.completed
            }
          : t
      )

    setTasks(updatedTasks)
  }

  const deleteTask = () => {

    const filteredTasks =
      tasks.filter(
        (t) => t.id !== task.id
      )

    setTasks(filteredTasks)
  }

  return (

    <Card style={{ marginBottom: 10 }}>

      <h3
        className={
          task.completed
            ? "task-completed"
            : "task-pending"
        }
      >

        {
          task.completed
            ? "✔ "
            : ""
        }

        {task.title}
        {" - "}
        {task.priority}

      </h3>

      <Space>

        <Button
          type="primary"
          onClick={completeTask}
        >
          Completar
        </Button>

        <Button
          danger
          onClick={deleteTask}
        >
          Eliminar
        </Button>

      </Space>

    </Card>
  )
}

export default TaskItem