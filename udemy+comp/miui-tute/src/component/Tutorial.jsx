import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import IconButton from "@mui/material/IconButton";

const Tutorial = () => {
  return (
    <>
      <Stack spacing={2} direction="row">
        <Button
          size="small"
          disableRipple
          variant="contained"
          startIcon={<DeleteIcon />}
        >
          Click Me
        </Button>
        <Button
          variant="contained"
          color="success"
          size="large"
          style={{ backgroundColor: "pink" }}
          endIcon={<SendIcon />}
        >
          Send
        </Button>
      </Stack>
      <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>
    </>
  );
};

export default Tutorial;
