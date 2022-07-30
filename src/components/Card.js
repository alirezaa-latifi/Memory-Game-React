import React from "react";

const Card = ({ children, flipped }) => {
    return <div className={`card ${flipped ? "flipped" : ""}`}>{children}</div>;
};

export default Card;
