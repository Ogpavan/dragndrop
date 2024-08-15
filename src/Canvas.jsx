// src/Canvas.js
import React, { useState } from "react";
import Draggable from "react-draggable";
import { ResizableBox } from "react-resizable";
import Card from "./Card";

const Canvas = () => {
  const [cards, setCards] = useState([]);

  const addCard = () => {
    const newCard = {
      id: cards.length + 1,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ipsam numquam nemo reprehenderit et id, nisi non mollitia nulla aspernatur deleniti optio neque eos laborum, ullam minus assumenda aperiam maxime. Ipsam natus iure hic fuga unde nemo, iste corrupti quam dicta, eveniet rem soluta. Ad enim illo reiciendis eaque fugiat minus soluta labore earum officia cumque totam voluptatem, et aut eos minima ea ratione eveniet doloremque iusto. ",
      position: { x: 50, y: 50 },
    };
    setCards([...cards, newCard]);
  };

  return (
    <div className="canvas-container">
      <button onClick={addCard} className="btn">Add Card</button>
      <div className="canvas">
        {cards.map((card) => (
          <Draggable key={card.id} defaultPosition={card.position}>
            <ResizableBox width={200} height={100} minConstraints={[100, 50]} maxConstraints={[300, 150]}>
              <Card text={card.text} />
            </ResizableBox>
          </Draggable>
        ))}
      </div>
    </div>
  );
};

export default Canvas;
