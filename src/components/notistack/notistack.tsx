import React from "react";
import { useSnackbar } from "notistack";
import { Button, Box } from "@mui/material";

type Props = {};

const Notistack = (props: Props) => {
  const { enqueueSnackbar } = useSnackbar();

  return (
    <Box bgcolor="white" p={1} width={80}>
      <Button
        onClick={() => {
          enqueueSnackbar("Do you want cookies?", {
            autoHideDuration: 5000,
          });
        }}
      >
        uplabs
      </Button>
    </Box>
  );
};

export default Notistack;
