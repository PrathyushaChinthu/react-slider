import React from "react";
import { useSnackbar } from "notistack";
import { Button, Box } from "@mui/material";

type Props = {};

const Notistack = (props: Props) => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  return (
    <Box bgcolor="white" p={1}>
      <Button
        onClick={() => {
          const snackbarKey = enqueueSnackbar("I like hooks", {
            autoHideDuration: 5000,
          });
          setTimeout(() => {
            closeSnackbar(snackbarKey);
          }, 8000); // Automatically close after 5 seconds
        }}
      >
        Show snackbar
      </Button>
    </Box>
  );
};

export default Notistack;
