import Badge1 from "./badge/badge";
import { Avatar, Badge } from "antd";
import "./app.css";

function App() {
  return (
    <div className="container">
      <Badge count={444} color="blue" title="blue" dot>
        {/* <div>gggg</div> */}

        <Avatar shape="square" size="large" />
      </Badge>

      <div className="badge-content">
        <Badge1 count={222} color="blue" title="blue" dot={true}>
          {/* <div>gggg</div> */}
          <Avatar shape="square" size="large" />
        </Badge1>
      </div>
    </div>
  );
}

export default App;
