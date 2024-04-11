import * as React from "react";
import { motion } from "framer-motion";
import { List } from "@mui/material";
import MenuItem from "./menu-item";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const itemIds = [0, 1, 2, 3, 4]; // Assuming itemIds is defined elsewhere

export const Navigation = () => (
  <motion.div variants={variants}>
    <List>
      {itemIds.map((i) => (
        <MenuItem key={i} i={i} />
      ))}
    </List>
  </motion.div>
);

export default Navigation;
