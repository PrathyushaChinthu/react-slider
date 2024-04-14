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

const containerVariants: Variants = {
  open: {
    height: "auto",
    transition: { staggerChildren: 0.05, delayChildren: 0.3 },
  },
  closed: {
    height: 0,
    transition: { duration: 0.3 },
  },
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
          cursor: "pointer",
          borderRadius: "10px",
          marginBottom: "10px",
        }}
        onClick={() => setIsOpen(!isOpen)}
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

      <motion.div variants={containerVariants} style={{ overflow: "hidden" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            backgroundColor: "white",
            padding: 1,
            borderRadius: "10px",
          }}
        >
          <List>
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
      </motion.div>
    </motion.nav>
  );
};

export default Animate;
