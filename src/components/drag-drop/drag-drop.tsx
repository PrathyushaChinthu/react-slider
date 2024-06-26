import React from "react";
import { Draggable, Droppable } from "@hello-pangea/dnd";
import { List, ListItem, Paper } from "@mui/material";

type Props = {};

const DragDrop: React.FC<Props> = () => {
  const handleDrop = (data: any) => {
    console.log(data);
    // Handle drop logic here
  };

  return (
    <div>
      <Paper elevation={3}>
        <List>
          <Draggable draggableId="banana" index={0}>
            {(provided, snapshot, rubic) => (
              <ListItem
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
              >
                Banana
              </ListItem>
            )}
          </Draggable>
          <Draggable draggableId="apple" index={1}>
            {(provided, snapshot, rubic) => (
              <ListItem
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
              >
                Apple
              </ListItem>
            )}
          </Draggable>
          <Draggable draggableId="silver" index={2}>
            {(provided, snapshot, rubic) => (
              <ListItem
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
              >
                Silver
              </ListItem>
            )}
          </Draggable>
        </List>
      </Paper>
      <Droppable type="fruit" droppableId="smoothie">
        {(provided, snapshot) => (
          <List
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="Smoothie"
          >
            {/* You can add a message or content here for the Droppable area */}
            {provided.placeholder}
          </List>
        )}
      </Droppable>
    </div>
  );
};

export default DragDrop;

// import React, { Component } from "react";
// import {
//   DragDropContext,
//   Droppable,
//   Draggable,
//   DropResult,
//   DraggableProvided,
//   DraggableStateSnapshot,
//   DroppableProvided,
//   DroppableStateSnapshot,
// } from "@hello-pangea/dnd";

// // Fake data generator
// const getItems = (count: number) =>
//   Array.from({ length: count }, (_, k) => ({
//     id: `item-${k}`,
//     content: `item ${k}`,
//   }));

// // A little function to help with reordering the result
// const reorder = <TList extends unknown[]>(
//   list: TList,
//   startIndex: number,
//   endIndex: number
// ): TList => {
//   const result = Array.from(list) as TList;
//   const [removed] = result.splice(startIndex, 1);
//   result.splice(endIndex, 0, removed);

//   return result;
// };

// const grid = 8;

// const getItemStyle = (
//   isDragging: boolean,
//   draggableStyle: React.CSSProperties
// ): React.CSSProperties => ({
//   // Some basic styles to make the items look a bit nicer
//   userSelect: "none",
//   padding: grid * 2,
//   margin: `0 0 ${grid}px 0`,

//   // Change background color if dragging
//   background: isDragging ? "lightgreen" : "pink",

//   // Styles we need to apply on draggables
//   ...draggableStyle,
// });

// const getListStyle = (isDraggingOver: boolean): React.CSSProperties => ({
//   background: isDraggingOver ? "lightgreen" : "red",
//   padding: grid,
//   width: 250,
// });

// interface AppProps {}

// interface Item {
//   id: string;
//   content: string;
// }

// interface AppState {
//   items: Item[];
// }

// class DragDrop extends Component<AppProps, AppState> {
//   constructor(props: AppProps) {
//     super(props);
//     this.state = {
//       items: getItems(10),
//     };
//     this.onDragEnd = this.onDragEnd.bind(this);
//   }

//   onDragEnd(result: DropResult) {
//     // Dropped outside the list
//     if (!result.destination) {
//       return;
//     }

//     const items = reorder(
//       this.state.items,
//       result.source.index,
//       result.destination.index
//     );

//     this.setState({
//       items,
//     });
//   }

//   render() {
//     return (
//       <DragDropContext onDragEnd={this.onDragEnd}>
//         <Droppable droppableId="droppable">
//           {(
//             droppableProvided: DroppableProvided,
//             droppableSnapshot: DroppableStateSnapshot
//           ) => (
//             <div
//               ref={droppableProvided.innerRef}
//               style={getListStyle(droppableSnapshot.isDraggingOver)}
//             >
//               {this.state.items.map((item, index) => (
//                 <Draggable key={item.id} draggableId={item.id} index={index}>
//                   {(
//                     draggableProvided: DraggableProvided,
//                     draggableSnapshot: DraggableStateSnapshot
//                   ) => (
//                     <div
//                       ref={draggableProvided.innerRef}
//                       {...draggableProvided.draggableProps}
//                       {...draggableProvided.dragHandleProps}
//                       style={getItemStyle(
//                         draggableSnapshot.isDragging,
//                         draggableProvided.draggableProps
//                           .style as React.CSSProperties
//                       )}
//                     >
//                       {item.content}
//                     </div>
//                   )}
//                 </Draggable>
//               ))}
//               {droppableProvided.placeholder}
//             </div>
//           )}
//         </Droppable>
//       </DragDropContext>
//     );
//   }
// }

// export default DragDrop;
