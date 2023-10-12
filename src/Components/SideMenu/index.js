import {
    AppstoreOutlined,
    ShopOutlined,
    ShoppingCartOutlined,
    UserOutlined,
  } from "@ant-design/icons";
  import { Menu } from "antd";
  import { useNavigate } from "react-router-dom";
  
  function SideMenu() {
    const navigate = useNavigate();
    return (
      <div className="SideMenu">
        <Menu
          className="SideMenuVertical"
          mode="vertical"
          onClick={(item) => {
            navigate(item.key);
          }}
          items={[
            {
              label: "Dashbaord",
              icon: <AppstoreOutlined />,
              key: "/dashboard",
            },
            {
              label: "Forecast",
              key: "/forecast",
              icon: <ShopOutlined />,
            },
            {
              label: "All Offices",
              key: "/all-offices",
              icon: <ShoppingCartOutlined />,
            },
            {
              label: "Employees",
              key: "/employees",
              icon: <UserOutlined />,
            },
          ]}
        ></Menu>
      </div>
    );
  }
  export default SideMenu;
  