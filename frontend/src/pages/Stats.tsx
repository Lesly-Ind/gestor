import { Card, Statistic, Row, Col } from "antd"

import type { Task } from "../interfaces/Task"

interface Props {
  tasks: Task[]
}

function Stats({ tasks }: Props) {

  const completed =
    tasks.filter(
      (task) => task.completed
    ).length

  const pending =
    tasks.filter(
      (task) => !task.completed
    ).length

  return (

    <div className="container">

      <h1 className="title">
        Estadísticas
      </h1>

      <Row gutter={16}>

        <Col span={8}>
          <Card>
            <Statistic
              title="Total"
              value={tasks.length}
            />
          </Card>
        </Col>

        <Col span={8}>
          <Card>
            <Statistic
              title="Completadas"
              value={completed}
            />
          </Card>
        </Col>

        <Col span={8}>
          <Card>
            <Statistic
              title="Pendientes"
              value={pending}
            />
          </Card>
        </Col>

      </Row>

    </div>
  )
}

export default Stats