import { useEffect, useState } from "react";
import "../App.css";
import Cards from "./Cards";

const cardImages = [
    { src: "./img/potion-1.png" },
    { src: "./img/helmet-1.png" },
    { src: "./img/ring-1.png" },
    { src: "./img/scroll-1.png" },
    { src: "./img/shield-1.png" },
    { src: "./img/sword-1.png" },
];

function App() {
    const [cards, setCards] = useState([]);
    const [turn, setTurn] = useState(0);
    const [firstChoice, setFirstChoice] = useState(null);
    const [secodChoice, setSecodChoice] = useState(null);
    const [disabled, setDisabled] = useState(false);

    // initializer
    const initializer = () => {
        const shuffledCards = [...cardImages, ...cardImages]
            .map((card, index) => ({ ...card, id: index + 1, matched: false }))
            .sort(() => Math.random() - 0.5);

        setCards(shuffledCards);
        setFirstChoice(null);
        setSecodChoice(null);
        setTurn(0);
    };

    // handle choice
    const handleChoice = (card) => {
        firstChoice ? setSecodChoice(card) : setFirstChoice(card);
    };

    // handle turns
    const handleTurns = () => {
        setFirstChoice(null);
        setSecodChoice(null);
        setTurn((prevTurn) => prevTurn + 1);
        setDisabled(false);
    };
    // useEffect : when secondChoice get updated
    useEffect(() => {
        if (secodChoice) {
            setDisabled(true);
            if (firstChoice.src === secodChoice.src) {
                console.log("same");
                setCards((prevCards) =>
                    prevCards.map((card) =>
                        secodChoice.src === card.src
                            ? { ...card, matched: true }
                            : { ...card }
                    )
                );
                setTimeout(() => {
                    handleTurns();
                }, 1000);
            } else {
                console.log("different");
                setTimeout(() => {
                    handleTurns();
                }, 1000);
            }
        }
    }, [secodChoice]);

    // useEffect : after first mount
    useEffect(() => {
        initializer();
    }, []);

    return (
        <div className="App">
            <h1>Magic Match</h1>
            <button onClick={initializer}>New Game</button>
            <Cards
                handleChoice={handleChoice}
                cards={cards}
                firstChoice={firstChoice}
                secondChoice={secodChoice}
                disabled={disabled}
            />
            <p className="turn">Turn : {turn}</p>
        </div>
    );
}

export default App;
