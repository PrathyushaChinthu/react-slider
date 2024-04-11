import * as React from "react";
import { motion } from "framer-motion";
import { ListItem, Box, Typography } from "@mui/material";
import { Email, Message, Call, Attachment, CallEnd } from "@mui/icons-material";

interface MenuItemProps {
  i: number;
}

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const icons = [<Email />, <Message />, <Call />, <Attachment />, <CallEnd />];
const iconNames = ["Email", "Message", "Call", "Attachment", "Call End"];

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

const MenuItem: React.FC<MenuItemProps> = ({ i }) => {
  return (
    <ListItem
      component={motion.li}
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Box
        sx={{
          width: 140,
          height: 40,
          backgroundColor: "#f0f0f0",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderRadius: 4,
          padding: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginLeft: 1,
          }}
        >
          {icons[i]}
          <Typography variant="body1" sx={{ marginLeft: 1 }}>
            {iconNames[i]}
          </Typography>
        </Box>
      </Box>
    </ListItem>
  );
};

export default MenuItem;

// import * as React from "react";
// import { motion } from "framer-motion";
// import { ListItem, ListItemAvatar, Avatar, ListItemText } from "@mui/material";
// import { Email, Message, Call, Attachment, CallEnd } from "@mui/icons-material";

// interface MenuItemProps {
//   i: number;
// }

// const variants = {
//   open: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       y: { stiffness: 1000, velocity: -100 },
//     },
//   },
//   closed: {
//     y: 50,
//     opacity: 0,
//     transition: {
//       y: { stiffness: 1000 },
//     },
//   },
// };

// const icons = [<Email />, <Message />, <Call />, <Attachment />, <CallEnd />];
// const iconNames = ["Email", "Message", "Call", "Attachment", "Call End"];

// const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

// const MenuItem: React.FC<MenuItemProps> = ({ i }) => {
//   const style = { border: `2px solid ${colors[i]}` };
//   return (
//     <ListItem
//       component={motion.li}
//       variants={variants}
//       whileHover={{ scale: 1.1 }}
//       whileTap={{ scale: 0.95 }}
//     >
//       <ListItemAvatar>
//         <Avatar>{icons[i]}</Avatar>
//       </ListItemAvatar>
//       <ListItemText primary={iconNames[i]} />
//     </ListItem>
//   );
// };

// export default MenuItem;
