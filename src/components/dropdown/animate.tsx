import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { List, ListItem, Typography, Box } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const Animate: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="menu"
    >
      <Box
        sx={{
          display: "flex",
          width: "150px",
          alignItems: "center",
          backgroundColor: "#fff",
          padding: 1,
          cursor: "pointer", // Added cursor pointer for the "Menu" text
          borderRadius: "10px", // Added border radius for rounded corners
          marginBottom: "10px", // Added margin bottom for gap
        }}
        onClick={() => setIsOpen(!isOpen)} // Added onClick event handler for the "Menu" text
      >
        <Typography variant="body1">Menu</Typography>
        <motion.div
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 },
          }}
          transition={{ duration: 0.2 }}
          style={{ originY: 0.55, marginLeft: "auto" }}
        >
          <ExpandMoreIcon />
        </motion.div>
      </Box>

      {isOpen && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column", // Display items in a column
            alignItems: "flex-start", // Align items to the start of the column
            backgroundColor: "white", // Apply grey background color
            padding: 1,
            borderRadius: "10px", // Add rounded corners
            overflow: "hidden", // Hide overflow to clip rounded corners
          }}
        >
          <List
            component={motion.ul}
            variants={{
              open: {
                clipPath: "inset(0% 0% 0% 0% round 10px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.7,
                  delayChildren: 0.3,
                  staggerChildren: 0.05,
                },
              },
              closed: {
                clipPath: "inset(10% 50% 90% 50% round 10px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.3,
                },
              },
            }}
            style={{ pointerEvents: isOpen ? "auto" : "none" }}
          >
            <ListItem component={motion.li} variants={itemVariants}>
              Item 1
            </ListItem>
            <ListItem component={motion.li} variants={itemVariants}>
              Item 2
            </ListItem>
            <ListItem component={motion.li} variants={itemVariants}>
              Item 3
            </ListItem>
            <ListItem component={motion.li} variants={itemVariants}>
              Item 4
            </ListItem>
            <ListItem component={motion.li} variants={itemVariants}>
              Item 5
            </ListItem>
          </List>
        </Box>
      )}
    </motion.nav>
  );
};

export default Animate;
