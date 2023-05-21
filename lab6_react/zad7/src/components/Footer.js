import React from "react";
import { useState } from "react";

const Footer = (props) => {
    return (
        <div className="Footer" style={{ background: "blue" }}>
            Stopka:
            <button
                onClick={(e) => {
                    props.changeFont(props.sizeRef.current.value);
                }}
            >
                Ustaw parametry tekstu na {props.inputFontSize}px, a kolor
                pozostaw bez zmian.
            </button>
            <br />
            <button
                onClick={(e) => {
                    console.log(props.likesCount);
                    props.setLikesCount(props.likesCount + 1);
                }}
            >
                Polub tę stronę
            </button>
        </div>
    );
};

export default Footer;
