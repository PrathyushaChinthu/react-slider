import { Box } from "@mui/material";
import Sliding from "./components/sliding";
import DragDrop from "./components/drag-drop/drag-drop";
import Framermotion from "./components/motion/framermotion";
import Animate from "./components/dropdown/animate";
const App = () => {
  return (
    <>
      {/* <Box
        mt={1}
        mb={1}
        p={2}
        bgcolor="black"
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
      >
        <Box height="50vh" width="100%" padding={2}>
          <Sliding />
        </Box>
      </Box> */}

      {/* <Box bgcolor="blue" minHeight="100vh" p={4} display="flex">
        <Box mt={2}>
          <Framermotion />
        </Box>
      </Box> */}
      {/* <Box bgcolor="blue" minHeight="100vh" p={4} display="flex">
        <Box mt={2}>
          <Animate />
        </Box>
      </Box> */}
      <Box bgcolor="blue" minHeight="100vh" p={4} display="flex">
        <Box mt={2}>
          <DragDrop />
        </Box>
      </Box>
    </>
  );
};

export default App;
