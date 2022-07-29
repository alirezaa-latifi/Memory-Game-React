import { useEffect, useState } from "react";
import "../App.css";
import Cards from "./Cards";

const cardImages = [
    { src: "/img/helmet-1.png" },
    { src: "/img/potion-1.png" },
    { src: "/img/ring-1.png" },
    { src: "/img/scroll-1.png" },
    { src: "/img/shield-1.png" },
    { src: "/img/sword-1.png" },
];

function App() {
    const [cards, setCards] = useState([]);
    const [turn, setTurn] = useState(0);
    const [firstChoice, setFirstChoice] = useState(null);
    const [secodChoice, setSecodChoice] = useState(null);

    // initializer
    const initializer = () => {
        const shuffledCards = [...cardImages, ...cardImages]
            .map((card, index) => ({ ...card, id: index + 1 }))
            .sort(() => Math.random() - 0.5);
        setCards(shuffledCards);
        setTurn(0);
    };

    // handle click
    const handleChoice = (card) => {
        firstChoice ? setSecodChoice({ ...card }) : setFirstChoice({ ...card });
    };

    useEffect(() => {
        initializer();
    }, []);

    return (
        <div className="App">
            <h1>Magic Match</h1>
            <button onClick={initializer}>New Game</button>
            <Cards handleChoice={handleChoice} cards={cards} />
        </div>
    );
}

export default App;
