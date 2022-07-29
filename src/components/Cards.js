import React from "react";
import Card from "./Card";

const Cards = ({ cards, handleChoice }) => {
    return (
        <div className="card-grid">
            {cards.length ? (
                cards.map((card) => {
                    return (
                        <Card key={card.id}>
                            <img className="front" src={card.src} />
                            <img
                                className="back"
                                src="/img/cover.png"
                                onClick={() => handleChoice(card)}
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
