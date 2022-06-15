import React from 'react';
import Picture from './Picture';
import {useDrop} from 'react-dnd';
import { useState } from "react";
import './Dnd.css';

const PictureList = [
    {
        id: 1,
        url: "https://i.imgur.com/rO9JCuY.jpg",
    },
    {
        id: 2,
        url: "https://i.imgur.com/0YXOHJa.jpg",
    },
    {
        id: 3,
        url: "https://i.imgur.com/iP8Th3c.jpg",
    },
];


function Dnd() {
    const [board, setBoard] = useState([]);
    const [{isOver}, drop] = useDrop(() => ({
        accept: "image",
        drop: (item) => addImageToBoard(item.id),
        collect: (monitor) => ({
            isDragging: !!monitor.isOver(),
        }),
    }));

    const addImageToBoard = (id) => {
        const pictureList = PictureList.filter((picture) => id === picture.id);
        setBoard((board) => [...board, pictureList[0]]);
        // setBoard([pictureList[0]]);  // for one picture that replaces itself maybe make a grid of boards...????

    };
    return(
        <>
            <div className="Pictures">{PictureList.map((picture) => {
                return <Picture url={picture.url} id={picture.id} />;
            })}


            </div>
            <div className="Board" ref={drop}>
                {board.map((picture) => {
                    return <Picture url={picture.url} id={picture.id} />;
                })}

            </div>
        </>
    )
};

export default Dnd;
