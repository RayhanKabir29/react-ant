import "./App.css";
import "antd/dist/reset.css";
import { Button } from "antd";
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
      <Button type="primary" loading={loading} onClick={handleBtnClic}>
        Explore AntDesign
      </Button>
    </div>
  );
}

export default App;
