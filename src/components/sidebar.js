import React, { useState } from "react";
import { Drawer } from "@mui/material";
import Form from "./form";
import List from "./list";
import { IconButton } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";

function Sidebar() {
  const [state, setState] = useState(false);

  const [items, setItems] = useState([]);

  const toggleHandler = () => {
    setState(!state);
  };

  const addItemHandler = (item) => {
    if (!item.text) {
      return;
    }
    const newItems = [item, ...items];
    setItems(newItems);
    console.log(item, ...items);
  };

  const completeItem = (id) => {
    let updatedItems = items.map((item) => {
      if (item.id === id) {
        item.isComplete = !item.isComplete;
      }
      return item;
    });
    setItems(updatedItems);
  };

  const updateItem = (itemId, newValue) => {
    setItems((prev) =>
      prev.map((item) => (item.id === itemId ? newValue : item))
    );
  };

  const removeItem = (id) => {
    let removeArr = items.filter((item) => item.id !== id);

    setItems(removeArr);
  };

  return (
    <div className="containerr">
      <div className="container">
        <h1>My Watchlist</h1>
        <IconButton onClick={toggleHandler} sx={{ color: "#fff" }}>
          <AddCircleIcon fontSize="large" />
        </IconButton>
      </div>

      <List
        items={items}
        completeItem={completeItem}
        removeItem={removeItem}
        updateItem={updateItem}
      />

      <Drawer
        anchor="left"
        open={state}
        onClose={toggleHandler}
        sx={{ backgroundColor: "grey" }}
      >
        <Form onAdd={toggleHandler} onSubmit={addItemHandler} />
      </Drawer>
    </div>
  );
}

export default Sidebar;
