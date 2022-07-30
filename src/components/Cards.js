import React from "react";
import Card from "./Card";

const Cards = ({
    cards,
    handleChoice,
    firstChoice,
    secondChoice,
    disabled,
}) => {
    return (
        <div className="card-grid">
            {cards.length ? (
                cards.map((card) => {
                    return (
                        <Card
                            flipped={
                                card === firstChoice ||
                                card === secondChoice ||
                                card.matched
                            }
                            key={card.id}
                        >
                            <img className="front" src={card.src} />
                            <img
                                className="back"
                                src="./img/cover.png"
                                onClick={() => !disabled && handleChoice(card)}
                            />
                        </Card>
                    );
                })
            ) : (
                <p style={{ gridArea: "2 / 2 / 3 / 4" }}>Loading Cards ...</p>
            )}
        </div>
    );
};

export default Cards;
