import { Menu } from "antd"
import { Link, useLocation } from "react-router-dom"

function Navbar() {

  const location = useLocation()

  return (

    <Menu
      mode="horizontal"
      selectedKeys={[location.pathname]}
    >

      <Menu.Item key="/">
        <Link to="/">
          Home
        </Link>
      </Menu.Item>

      <Menu.Item key="/tasks">
        <Link to="/tasks">
          Tareas
        </Link>
      </Menu.Item>

      <Menu.Item key="/stats">
        <Link to="/stats">
          Estadísticas
        </Link>
      </Menu.Item>

    </Menu>
  )
}

export default Navbar