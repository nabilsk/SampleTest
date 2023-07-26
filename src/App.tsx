import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug1", isFixed: false },
    { id: 2, title: "Bug2", isFixed: false },
  ]);
  const updateBugStatus = () => {
    setBugs(bugs.map((bug) => (bug.id == 1 ? { ...bug, isFixed: true } : bug)));
  };

  return (
    <div>
      <Button label="test" color="success" onClick={() => updateBugStatus} />
    </div>
  );
}

export default App;
