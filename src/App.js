import "antd/dist/reset.css";
import { PoweroffOutlined } from "@ant-design/icons";
import { Button, Table } from "antd";
import { useState } from "react";

function App() {
  const [loading, setLoading] = useState(false);
  const handleBtnClic = (e) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };
  return (
    <div className="App">
      <Button
        type="primary"
        loading={loading}
        onClick={handleBtnClic}
        icon={<PoweroffOutlined />}
      >
        Explore AntDesign
      </Button>
      <Table />
    </div>
  );
}

export default App;
