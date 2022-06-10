import React,{useState,useEffect} from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const data = [
  {
    id: "item-1",
    context: "item-1",
  },
  {
    id: "item-2",
    context: "item-2",
  },
  {
    id: "item-3",
    context: "item-3",
  },
  {
    id: "item-4",
    context: "item-4",
  },
  {
    id: "item-5",
    context: "item-5",
  },
  {
    id: "item-6",
    context: "item-6",
  },
  {
    id: "item-7",
    context: "item-7",
  },
];
const getListStyle=()=>{

}
const getItemStyle=()=>{

}
const Profile = () => {
  const [items,setitems]=useState()
  useEffect(()=>{
      setitems(data)
  },[])
 
  
  const onDragEnd=()=>{

  }
  return (
    <div className="main_content">
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}
          >
            {items?.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided, snapshot) => (
                  <div
                    className="card"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={getItemStyle(
                      snapshot.isDragging,
                      provided.draggableProps.style
                    )}
                  >
                    {item.context}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  </div>
  )
};

export default Profile;
