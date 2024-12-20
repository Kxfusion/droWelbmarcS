import { useRef } from 'react';
import './Tile.css';

type TileProps = { letter: string, id: string };
type TilePointerEvent = React.PointerEvent<HTMLDivElement>;

export function Tile({ letter, id }: TileProps) {
    const tile = useRef<HTMLDivElement>(null);
    let offsetHeight = 0;
    let offsetWidth = 0;

    const pointerMove = (e: PointerEvent) => {
        if (tile.current === null) return; 
        
        tile.current.style.transform =
            `translate(${e.clientX - (offsetWidth / 2)}px, ${e.clientY - (offsetHeight / 2)}px)`;
    }

    const capturePointer = (event: TilePointerEvent) => {
        if (tile.current === null) {
            return;
        }

        console.log(tile.current.offsetWidth);
        tile.current.style.left = "0";
        tile.current.style.top = "0";
        tile.current.style.cursor = "none";
        tile.current.style.opacity = "60%";
        tile.current.style.position = "absolute";
        tile.current.style.minWidth = `45px`;
        tile.current.style.minHeight = `30px`;
        offsetWidth = tile.current.offsetWidth;
        offsetHeight = tile.current.offsetHeight;
        tile.current.onpointermove = pointerMove;
        tile.current.setPointerCapture(event.pointerId);
    };

    const releasePointer = (event: TilePointerEvent) => {
        if (tile.current === null) {
            return;
        }

        tile.current.removeAttribute("style");
        tile.current.onpointermove = null;
        tile.current.releasePointerCapture(event.pointerId);
    };

    return (
        <div 
            ref={tile}
            draggable="false"
            className="outer-tile"
            onPointerDown={capturePointer}
            onPointerUp={releasePointer}
        >
            {letter}
        </div>
    );
};
