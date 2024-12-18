import type React from "react";
import './Board.css';

type BoardProps = React.PropsWithChildren<{}>

export function Board({ children }: BoardProps) {
    return (
        <div className="board-container">
            {children}
        </div>
    );
};
