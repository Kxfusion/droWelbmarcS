export function usePuzzle() {
    const getWordOfTheDay = async () => {
        const result = await fetch("/api/word-of-the-day");

        if (result.status === 200) {
            return result.body;
        } else {
            return "error";
        }
    };

    const randomizeOrder = (word: string) => {
        let newWordMap: Map<number, string> = new Map();
        let finalWord = word.split("").map(() => " ");

        word.split('').forEach(char => {
            const position = Math.floor(Math.random() * word.length);

            if (newWordMap.has(position)) {
                while (true) {
                    const position = Math.floor(Math.random() * word.length);
                    if (!newWordMap.has(position)) {
                        newWordMap.set(position, char);
                        break;
                    }
                }

                return;
            }

            newWordMap.set(position, char);
        })

        for (let entry of newWordMap.entries()) {
            const [index, char] = entry;

            finalWord[index] = char;
        }

        return finalWord.join("");
    }

    return {
        getWordOfTheDay,
        randomizeOrder,
    };
}