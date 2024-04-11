import { Box } from "@mui/material";
import Sliding from "./components/sliding";
import Framermotion from "./components/framermotion";
const App = () => {
  return (
    <>
      <Box
        mt={1}
        mb={1}
        p={2}
        bgcolor="black"
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
      >
        {/* overflow="hidden" */}
        <Box height="50vh" width="100%" padding={2}>
          <Sliding />
        </Box>
      </Box>
      <Box mt={2}>
        <Framermotion />
      </Box>
    </>
  );
};

export default App;
