import React from "react";

const Main = (props) => {
    return (
        <div className="Main">
            <p
                style={{
                    color: props.fontColor,
                    fontSize: props.fontSize + "px",
                }}
            >
                Szkielety programistyczne w aplikacjach internetowych: Node,
                MongoDB, Express, React.
            </p>
        </div>
    );
};

export default Main;
