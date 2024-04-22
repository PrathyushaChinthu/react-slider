import React from "react";
import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import SortableItem from "./Sortable_item";
import { Box } from "@mui/material";

interface ContainerProps {
  id: string;
  items: string[]; // Assuming items is an array of strings
}

const containerStyle: React.CSSProperties = {
  background: "red",
  padding: 10,
  margin: 10,
  flex: 1,
};

export default function Container(props: ContainerProps) {
  const { id, items } = props;

  const { setNodeRef } = useDroppable({
    id,
  });

  return (
    <SortableContext
      id={id}
      items={items}
      strategy={verticalListSortingStrategy}
    >
      <Box ref={setNodeRef} style={containerStyle}>
        {items.map((itemId) => (
          <SortableItem key={itemId} id={itemId} />
        ))}
      </Box>
    </SortableContext>
  );
}
