import React, { useState } from "react";
import {
  DndContext,
  DragOverlay,
  closestCorners,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";

import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";

import Container from "./Container";
import { Item } from "./Sortable_item"; // Import the Item component
import { Box } from "@mui/material";

const wrapperStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
};

const defaultAnnouncements = {
  onDragStart({ active }: { active: { id: string } }) {
    console.log(`Picked up draggable item ${active.id}.`);
  },
  onDragOver(activeId: string, overId: string | null) {
    if (overId) {
      console.log(
        `Draggable item ${activeId} was moved over droppable area ${overId}.`
      );
      return;
    }

    console.log(
      `Draggable item ${activeId} is no longer over a droppable area.`
    );
  },
  onDragEnd({
    active,
    over,
  }: {
    active: { id: string };
    over: { id: string };
  }) {
    const { id } = active;
    const { id: overId } = over;
    if (overId) {
      console.log(
        `Draggable item ${id} was dropped over droppable area ${overId}`
      );
      return;
    }

    console.log(`Draggable item ${id} was dropped.`);
  },
  onDragCancel({ active }: { active: { id: string } }) {
    console.log(
      `Dragging was cancelled. Draggable item ${active.id} was dropped.`
    );
  },
};

export default function Dndkit() {
  const [items, setItems] = useState<Record<string, string[]>>({
    root: ["1", "2", "3"],
    container1: ["4", "5", "6"],
    container2: ["7", "8", "9"],
    container3: [],
  });
  const [activeId, setActiveId] = useState<string | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  return (
    <Box bgcolor="lightblue" style={wrapperStyle}>
      <DndContext
        announcements={defaultAnnouncements}
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
      >
        <Container id="root" items={items.root} />
        <Container id="container1" items={items.container1} />
        <Container id="container2" items={items.container2} />
        <Container id="container3" items={items.container3} />
        <DragOverlay>{activeId ? <Item id={activeId} /> : null}</DragOverlay>
      </DndContext>
    </Box>
  );

  function findContainer(id: string) {
    if (id in items) {
      return id;
    }

    return Object.keys(items).find((key) => items[key].includes(id));
  }

  function handleDragStart(event: { active: { id: string } }) {
    const { active } = event;
    const { id } = active;

    setActiveId(id);
  }

  function handleDragOver(event: {
    active: { id: string };
    over: { id: string; top?: number; height?: number };
    draggingRect: DOMRect;
  }) {
    const { active, over, draggingRect } = event;
    const { id: activeId } = active;
    const { id: overId, top, height } = over;

    // Find the containers
    const activeContainer = findContainer(activeId);
    const overContainer = findContainer(overId);

    if (
      !activeContainer ||
      !overContainer ||
      activeContainer === overContainer
    ) {
      return;
    }

    setItems((prev) => {
      const activeItems = prev[activeContainer];
      const overItems = prev[overContainer];

      // Find the indexes for the items
      const activeIndex = activeItems.indexOf(activeId);
      const overIndex = overItems.indexOf(overId);

      let newIndex;
      if (overId in prev) {
        // We're at the root droppable of a container
        newIndex = overItems.length + 1;
      } else {
        const isBelowLastItem =
          over &&
          top !== undefined &&
          height !== undefined &&
          overIndex === overItems.length - 1 &&
          draggingRect.top > top + height;

        const modifier = isBelowLastItem ? 1 : 0;

        newIndex = overIndex >= 0 ? overIndex + modifier : overItems.length + 1;
      }

      return {
        ...prev,
        [activeContainer]: [
          ...prev[activeContainer].filter((item) => item !== activeId),
        ],
        [overContainer]: [
          ...prev[overContainer].slice(0, newIndex),
          items[activeContainer][activeIndex],
          ...prev[overContainer].slice(newIndex, prev[overContainer].length),
        ],
      };
    });
  }

  function handleDragEnd(event: {
    active: { id: string };
    over: { id: string };
  }) {
    const { active, over } = event;
    const { id } = active;
    const { id: overId } = over;

    const activeContainer = findContainer(id);
    const overContainer = findContainer(overId);

    if (
      !activeContainer ||
      !overContainer ||
      activeContainer !== overContainer
    ) {
      return;
    }

    const activeIndex = items[activeContainer].indexOf(id);
    const overIndex = items[overContainer].indexOf(overId);

    if (activeIndex !== overIndex) {
      setItems((items) => ({
        ...items,
        [overContainer]: arrayMove(
          items[overContainer],
          activeIndex,
          overIndex
        ),
      }));
    }

    setActiveId(null);
  }
}
