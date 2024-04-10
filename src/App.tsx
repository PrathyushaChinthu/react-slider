import { Box } from "@mui/material";
import Sliding from "./components/sliding";

const App = () => {
  return (
    <>
      <Box mt={2} mb={2} p={2} display="flex" gap={5} bgcolor="red">
        <Box height="50vh" width="100%" overflow="hidden" padding={2}>
          <Sliding />
        </Box>
      </Box>
    </>
  );
};

export default App;
