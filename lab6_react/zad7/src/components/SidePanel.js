import React from "react";

const SidePanel = (props) => {
    return (
        <div className="SidePanel">
            <input
                type="text"
                defaultValue={props.fontSize}
                ref={props.sizeRef}
                onChange={(e) => {
                    props.setInputFontSize(e.target.value);
                }}
            />
            <br />
            <input
                type="text"
                defaultValue={props.fontColor}
                ref={props.colorRef}
                onChange={(e) => {
                    props.setInputFontColor(e.target.value);
                }}
            />
            <br />
            <button
                onClick={(e) => {
                    props.changeStyle(
                        props.sizeRef.current.value,
                        props.colorRef.current.value
                    );
                }}
            >
                Ustaw parametry tekstu: {props.inputFontSize}px,
                {props.inputFontColor}
            </button>
        </div>
    );
};

export default SidePanel;
