import { useState } from "react";
import { Tile } from "../components/Tile";

type UseTilesProps = { word: string };

const generateInitialTiles = (word: string) => {
    return word.split('').map((char, index) => {
        return <Tile letter={char} key={index} id={`${index}`} />;
    });
};

export function useTiles ({ word }: UseTilesProps) {
    const [tiles, setTiles] = useState(generateInitialTiles(word));

    return { tiles };
}
