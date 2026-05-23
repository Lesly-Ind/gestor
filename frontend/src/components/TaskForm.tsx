import React, { useState } from "react"

import {
  Input,
  Button,
  Select,
  Form,
  Card
} from "antd"

import type { Task } from "../interfaces/Task"

interface Props {
  tasks: Task[]
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

function TaskForm({ tasks, setTasks }: Props) {

  const [title, setTitle] = useState("")
  const [priority, setPriority] = useState("Alta")

  const handleSubmit = (
    e: React.FormEvent
  ) => {

    e.preventDefault()

    if (!title) return

    const newTask: Task = {
      id: Date.now(),
      title,
      priority,
      completed: false
    }

    setTasks([...tasks, newTask])

    setTitle("")
    setPriority("Alta")
  }

  return (

    <Card>

      <Form
        layout="vertical"
        onSubmitCapture={handleSubmit}
      >

        <Form.Item label="Nombre de tarea">

          <Input
            placeholder="Ingrese tarea"

            value={title}

            onChange={(e) =>
              setTitle(e.target.value)
            }

            onFocus={() =>
              console.log("Input seleccionado")
            }

            onBlur={() =>
              console.log("Input perdió foco")
            }
          />

        </Form.Item>

        <Form.Item label="Prioridad">

          <Select

            value={priority}

            onChange={(value) =>
              setPriority(value)
            }

            options={[
              {
                value: "Alta",
                label: "Alta"
              },
              {
                value: "Media",
                label: "Media"
              },
              {
                value: "Baja",
                label: "Baja"
              }
            ]}
          />

        </Form.Item>

        <Button
          type="primary"
          htmlType="submit"
        >
          Agregar tarea
        </Button>

      </Form>

    </Card>
  )
}

export default TaskForm