import { Box } from "@mui/material";
import Sonner from "./components/sonner/Sonner";
import { Dnd } from "./components/dnd/Dnd";
import Sliding from "./components/sliding";
import Notistack from "./components/notistack/notistack";
import DragDrop from "./components/drag-drop/drag-drop";
import Framermotion from "./components/motion/framermotion";
import Animate from "./components/dropdown/animate";
import Quill from "./components/quill/quill";
import QuillComponent from "./components/quill/quill";
import Dndkit from "./components/dnd-kit/Dndkit";
import Carousel from "./components/Carousel/Carousel";
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
      {/* <Box bgcolor="blue" minHeight="100vh" p={4} display="flex">
        <Box mt={2}>
          <DragDrop />
        </Box>
      </Box> */}
      {/* <Box bgcolor="lightpink" minHeight="100vh" p={4} display="flex">
        <Box mt={2} width="50%">
          <Notistack />
        </Box>
        <Box mt={2} width="50%">
          <QuillComponent />
        </Box>
      </Box> */}
      {/* <Box>
        <Dnd />
      </Box> */}

      <Box bgcolor="lightgreen" padding={1}>
        <Box sx={{ mt: 4, mb: 4, ml: 2, mr: 2 }} bgcolor="black">
          <Dndkit />
        </Box>
        <Box sx={{ ml: 2, mr: 2, mb: 4 }} display="flex">
          <Box sx={{ width: "30%" }}>
            <Sonner />
          </Box>
          <Box sx={{ width: "70%" }} bgcolor="lightblue">
            <Carousel />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default App;
