import {
  Typography,
  Button,
  Space,
  Card
} from "antd"

import { Link } from "react-router-dom"

const { Title, Paragraph } = Typography

function Home() {

  return (

    <div className="container">

      <Card>

        <div className="title">

          <Title>
            Sistema de Gestión de Tareas
          </Title>

          <Paragraph>
            Bienvenido a la aplicación interactiva.
          </Paragraph>

          <Space>

            <Link to="/tasks">
              <Button type="primary">
                Ir a tareas
              </Button>
            </Link>

            <Link to="/stats">
              <Button>
                Ir a estadísticas
              </Button>
            </Link>

          </Space>

        </div>

      </Card>

    </div>
  )
}

export default Home