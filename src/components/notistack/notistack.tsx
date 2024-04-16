import React from "react";
import { useSnackbar } from "notistack";
import { Button, Box } from "@mui/material";

type Props = {};

const Notistack = (props: Props) => {
  const { enqueueSnackbar } = useSnackbar();

  return (
    <Box bgcolor="white" p={1}>
      <Button
        onClick={() => {
          enqueueSnackbar("I like hooks", {
            autoHideDuration: 3000,
          });
        }}
      >
        Show snackbar
      </Button>
    </Box>
  );
};

export default Notistack;
