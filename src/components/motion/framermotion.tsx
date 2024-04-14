import React, { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./menu-toggle";
import { Navigation } from "./navigation";
import { AppBar, Toolbar, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

interface SidebarProps {
  // Define any props here if needed
}

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Framermotion: React.FC<SidebarProps> = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef<HTMLDivElement>(null);
  const { height } = useDimensions(containerRef);

  return (
    <>
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
      >
        <motion.div className="background" variants={sidebar} />
        <Navigation />
        <MenuToggle toggle={() => toggleOpen()} />
      </motion.nav>
    </>
  );
};

export default Framermotion;

// import * as React from "react";
// import { useRef } from "react";
// import { motion, useCycle, Variants } from "framer-motion";
// import { IconButton, Box } from "@mui/material";
// import { Menu, Close } from "@mui/icons-material";
// import { useDimensions } from "./use-dimensions";
// import Navigation from "./navigation";

// const sidebar: Variants = {
//   open: (height = 1000) => ({
//     clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
//     transition: {
//       type: "spring",
//       stiffness: 20,
//       restDelta: 2,
//     },
//   }),
//   closed: {
//     clipPath: "circle(30px at 40px 40px)",
//     transition: {
//       delay: 0.5,
//       type: "spring",
//       stiffness: 400,
//       damping: 40,
//     },
//   },
// };

// const Framermotion: React.FC = () => {
//   const [isOpen, toggleOpen] = useCycle(false, true);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const { height } = useDimensions(containerRef);

//   const toggleDrawer = () => {
//     toggleOpen();
//   };

//   return (
//     <>
//       <motion.nav
//         initial={false}
//         animate={isOpen ? "open" : "closed"}
//         custom={height}
//         ref={containerRef}
//       >
//         <motion.div
//           className="background"
//           variants={sidebar}
//           style={{
//             position: "fixed",
//             top: 0,
//             left: 0,
//             width: "25%", // Adjust the width here (e.g., "25%")
//             height: "100vh",
//             backgroundColor: "#ffffff",
//           }}
//         />
//         {isOpen && <Navigation />}
//         <Box
//           sx={{
//             position: "fixed",
//             top: "16px",
//             left: "16px",
//             zIndex: 999,
//             backgroundColor: isOpen ? "transparent" : "#f0f0f0",
//             borderRadius: "50%",
//             padding: "8px",
//           }}
//         >
//           <IconButton onClick={toggleDrawer}>
//             {isOpen ? <Close /> : <Menu />}
//           </IconButton>
//         </Box>
//       </motion.nav>
//     </>
//   );
// };

// export default Framermotion;
