import { Box, Button } from "@mui/material";
import { Toaster, toast } from "sonner";

function Sonner() {
  return (
    <Box>
      <Toaster richColors expand={false} position="bottom-left" />
      <Button
        variant="contained"
        onClick={() => toast.success("Yes,Event has been created")}
      >
        Has event been created?
      </Button>
    </Box>
  );
}

export default Sonner;
// import { Box, Button } from "@mui/material";
// import React, { useState } from "react";

// const Toaster = ({ toastStyles }) => {
//   const [isVisible, setIsVisible] = useState(false);

//   const handleToast = () => {
//     setIsVisible(true);
//     setTimeout(() => {
//       setIsVisible(false);
//     }, 3000); // Adjust the duration as needed
//   };

//   return (
//     <>
//       {isVisible && (
//         <div className="toaster" style={toastStyles}>
//           Yes, I like cookies
//         </div>
//       )}
//       <Button onClick={handleToast}>Do you like cookies?</Button>
//     </>
//   );
// };

// function Sonner() {
//   const toastStyles = {
//     backgroundColor: "black",
//     color: "white",
//   };

//   return (
//     <Box>
//       <Toaster toastStyles={toastStyles} />
//     </Box>
//   );
// }

// export default Sonner;
