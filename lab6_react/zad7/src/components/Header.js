import React from "react";

const Header = (props) => {
    return (
        <div className="Header">
            <h1>Nagłówek</h1>
            <p>
                Aktualny rozmiar czcionki: <b>{props.fontSize}</b>
            </p>
            <p>
                Aktualny kolor czcionki: <b>{props.fontColor}</b>
            </p>
            <p>
                Liczba lajków: <b>{props.likesCount}</b>
            </p>
        </div>
    );
};

export default Header;
