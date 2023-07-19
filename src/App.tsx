import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  const [alertvisiable, setAlertvisiable] = useState(false);
  let items = ["New york", "Tokyo", "London", "Test", "Qwerty"];

  const handleSelectedItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      {alertvisiable && (
        <Alert onClose={() => setAlertvisiable(false)}>Test Alert</Alert>
      )}
      <ListGroup
        heading="Cities"
        items={items}
        onSelectedItem={handleSelectedItem}
      />
      <Button
        label="test"
        color="success"
        onClick={() => setAlertvisiable(true)}
      />
    </div>
  );
}

export default App;
