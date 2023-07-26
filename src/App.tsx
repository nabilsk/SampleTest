import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  const [tags, setTags] = useState(["happy", "cheerful"]);

  const updateBugStatus = () => {
    //add new item in array
    setTags([...tags, "hello"]);

    //remove element from array
    setTags(tags.filter((tag) => tag !== "happy"));

    //update elementt in array
    setTags(tags.map((tag) => (tag === "happy" ? "Test" : tag)));
  };

  return (
    <div>
      <Button label="test" color="success" onClick={() => updateBugStatus} />
    </div>
  );
}

export default App;
