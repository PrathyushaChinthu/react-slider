import "./styles.css";
import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { IconButton, List, ListItem, ListItemIcon } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="menu"
    >
      <IconButton
        onClick={() => setIsOpen(!isOpen)}
        aria-label="menu"
        sx={{ mr: 1 }}
      >
        <MenuIcon />
        <motion.div
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 },
          }}
          transition={{ duration: 0.2 }}
          style={{ originY: 0.55 }}
        >
          <ExpandMoreIcon />
        </motion.div>
      </IconButton>
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
    </motion.nav>
  );
}
