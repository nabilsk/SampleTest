import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  const [customer, setCustomer] = useState({
    name: "Sam",
    address: {
      city: "Mumbai",
      pincode: 400060,
    },
  });

  const updateCustomerStatus = () => {
    setCustomer({
      ...customer,
      address: { ...customer.address, pincode: 400061 },
    });
  };

  return (
    <div>
      <Button
        label="test"
        color="success"
        onClick={() => updateCustomerStatus}
      />
    </div>
  );
}

export default App;
