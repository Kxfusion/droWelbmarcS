import './Tile.css';

type TileProps = { letter: string };

export function Tile({ letter }: TileProps) {
    return (
        <div className="outer-tile">
            {letter}
        </div>
    );
};
