import { useState } from "react";
import demoContext from "./demoContext";

const DemoState = (props) => {
  const s1 = {
    name: "Fenil",
    mobile: "123",
  };

  const [state, setState] = useState(s1);

  const update = () => {
    setTimeout(() => {
      setState({
        name: "Feniliya",
        mobile: "123",
      });
    }, 2000);
  };

  return <demoContext.Provider value={{ state, update }}>{props.children}</demoContext.Provider>;
};

export default DemoState;
