import { useTiles } from '../hooks/useTiles';
import './Board.css';

type BoardProps = {
    word: string,
};

export function Board({ word }: BoardProps) {
    const { tiles } = useTiles({ word });

    return (
        <div className="board-container">
            {tiles}
        </div>
    );
};
