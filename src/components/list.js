import * as React from "react";
import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";
import Form from "./form";

function List({ items, completeItem, removeItem, updateItem }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateItem(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <Form edit={edit} onSubmit={submitUpdate} />;
  }

  return (
    <TableContainer component={Paper} sx={{ marginTop: 2 }}>
      <Table sx={{ width: 650, margin: "auto" }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ fontWeight: "bold" }}>
            <TableCell sx={{ fontSize: 20, fontWeight: "bold" }} align="center">
              No.
            </TableCell>
            <TableCell sx={{ fontSize: 20, fontWeight: "bold" }} align="center">
              Movie Name
            </TableCell>
            <TableCell sx={{ fontSize: 20, fontWeight: "bold" }} align="center">
              Actions
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{ border: 0 }}>
          {items.map((item, index) => (
            <TableRow
              key={item.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                sx={{ fontWeight: "bold", fontSize: 15 }}
                align="center"
              >
                {index + 1}
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: "bold",
                  fontSize: 15,
                  textTransform: "capitalize",
                }}
                align="center"
                onClick={() => completeItem(item.id)}
              >
                {item.text}
              </TableCell>
              <TableCell
                sx={{ fontWeight: "bold", fontSize: 15 }}
                align="center"
                style={{ display: "flex", justifyContent: "space-evenly" }}
              >
                <IconButton
                  onClick={() => removeItem(item.id)}
                  sx={{ color: "black" }}
                >
                  <DeleteIcon />
                </IconButton>
                <IconButton
                  sx={{ color: "black" }}
                  onClick={() =>
                    setEdit({
                      id: item.id,
                      value: item.text,
                    })
                  }
                >
                  <EditIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default List;
