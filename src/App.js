import Badge1 from "./badge/badge";
import { Avatar, Badge } from "antd";
import "./app.css";
import { ClockCircleOutlined } from "@ant-design/icons";

function App() {
  return (
    <div className="container">
      <Badge
        count={
          // <ClockCircleOutlined
          //   style={{
          //     color: "#f5222d",
          //   }}
          // />
          19
        }
        // offset={["10", 10]}
        color="red"
        // title="blue"
        // size="small"
        // dot={true}
        status="warning"
      >
        {/* <div>gggg</div> */}

        {/* <Avatar shape="square" size="large" /> */}
        {/* <HomeOutlined /> */}
      </Badge>

      <div className="badge-content">
        <Badge1
          count={6}
          color="red"
          title="blue"
          size="small"
          dot
          offset={[10, 10]}
          status="warning"
        >
          {/* <div>gggg</div> */}
          {/* <Avatar shape="square" size="large" /> */}
        </Badge1>
      </div>
    </div>
  );
}

export default App;
