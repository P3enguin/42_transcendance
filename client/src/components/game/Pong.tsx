import React, {
  MouseEventHandler,
  TouchEventHandler,
  useEffect,
  useRef,
  useState,
} from 'react';
import Board from './Board';
import Paddle from './Paddle';
import Ball from './Ball';
import { Socket } from 'socket.io-client';

interface PongProps {
  gameRef: React.RefObject<HTMLDivElement>;
  socket: Socket;
  position: string;
}

const BOARD_WIDHT = 700;
const BOARD_HEIGHT = BOARD_WIDHT * 1.4;
const PADDLE_OFFSET = 10;
const PADDLE_WIDTH = BOARD_WIDHT / 8;
const PADDLE_HEIGHT = PADDLE_WIDTH / 5;
const BALL_DIAMETER = PADDLE_HEIGHT;
const BALL_RADIUS = BALL_DIAMETER / 2;

const Pong = ({ gameRef, socket, position }: PongProps) => {
  const boardRef = useRef<HTMLDivElement>(null);
  const ballRef = useRef<HTMLDivElement>(null);
  // socket.on('move it', ({ position, x }: any) => {
  //   if (position === 'Top') {
  //     setPaddle1Position((prev) => ({x : x - PADDLE_WIDTH/2, y: prev.y}));
  //   } else {
  //     setPaddle2Position((prev) => ({ x: x - PADDLE_WIDTH / 2, y: prev.y }));
  //   }
  // });

  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
    
    if (boardRef.current && position !== 'spectator') {
      const rec = boardRef.current.getBoundingClientRect();
      let x = (700 * (e.clientX - rec.left)) / boardRef.current.offsetWidth;
      if (x < 0 + PADDLE_WIDTH/2 || x > 700 - PADDLE_WIDTH/2) return;
      if (position === 'Top')
          x = Math.abs(x - 700)
      socket.emit('move', { x: Math.round(x), position });
    }
  };

  const handleTouchMove: TouchEventHandler<HTMLDivElement> = (e) => {
    if (boardRef.current && position !== 'spectator') {
      const rec = boardRef.current.getBoundingClientRect();
      const x =
        (700 * (e.touches[0].clientX - rec.left)) /
        boardRef.current.offsetWidth;
      if (x < 0 || x > 700) return;
      socket.emit('move', { x: Math.round(x), position });
    }
  };

  return (
    <Board
      position={position}
      parentRef={gameRef}
      boardRef={boardRef}
      mouseHandler={handleMouseMove}
      touchHandler={handleTouchMove}
    >
      <Paddle position="Top" ws={socket} />
      <Ball ws={socket} ballRef={ballRef} />
      <Paddle position="Bottom" ws={socket} />
    </Board>
  );
};

export default Pong;
