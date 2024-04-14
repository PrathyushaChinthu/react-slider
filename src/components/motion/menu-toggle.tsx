import * as React from "react";
import { motion } from "framer-motion";
import { SVGProps } from "framer-motion"; // Correct import
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Path: React.FC<SVGProps<SVGPathElement>> = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

interface MenuToggleProps {
  toggle: () => void;
}

export const MenuToggle: React.FC<MenuToggleProps> = ({ toggle }) => (
  <IconButton onClick={toggle}>
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        initial={false}
        animate={{ rotate: 0, transition: { duration: 0.1 } }}
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        initial={false}
        animate={{ opacity: 1 }}
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
        d="M 2 9.423 L 20 9.423"
      />
      <Path
        initial={false}
        animate={{ rotate: 0, transition: { duration: 0.1 } }}
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </IconButton>
);

// import * as React from "react";
// import { motion } from "framer-motion";
// import { IconButton, SvgIcon } from "@mui/material";

// interface MenuToggleProps {
//   toggle: () => void; // Explicitly define the type of the toggle prop
// }

// const Path = (props: any) => (
//   <motion.path
//     fill="transparent"
//     strokeWidth="3"
//     stroke="hsl(0, 0%, 18%)"
//     strokeLinecap="round"
//     {...props}
//   />
// );

// export const MenuToggle: React.FC<MenuToggleProps> = ({ toggle }) => (
//   <IconButton onClick={toggle} aria-label="menu toggle">
//     <SvgIcon width="23" height="23" viewBox="0 0 23 23">
//       <Path
//         variants={{
//           closed: { d: "M 2 2.5 L 20 2.5" },
//           open: { d: "M 3 16.5 L 17 2.5" },
//         }}
//       />
//       <Path
//         d="M 2 9.423 L 20 9.423"
//         variants={{
//           closed: { opacity: 1 },
//           open: { opacity: 0 },
//         }}
//         transition={{ duration: 0.1 }}
//       />
//       <Path
//         variants={{
//           closed: { d: "M 2 16.346 L 20 16.346" },
//           open: { d: "M 3 2.5 L 17 16.346" },
//         }}
//       />
//     </SvgIcon>
//   </IconButton>
// );
