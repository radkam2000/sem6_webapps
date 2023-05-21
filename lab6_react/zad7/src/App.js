import logo from "./logo.svg";
import "./App.css";
import SidePanel from "./components/SidePanel";
import { useState, useRef } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
    const [fontSize, setFontSize] = useState("30");
    const [fontColor, setFontColor] = useState("black");
    const [likesCount, setLikesCount] = useState(5);

    const [inputFontSize, setInputFontSize] = useState(fontSize);
    const [inputFontColor, setInputFontColor] = useState(fontColor);

    const sizeRef = useRef();
    const colorRef = useRef();

    const changeStyle = (size, color) => {
        var s = new Option().style;
        s.color = color;
        if (s.color == color) setFontColor(color);
        else setFontColor("black");
        let isnum = /^\d+$/.test(size);
        if (isnum === true) setFontSize(size);
        else setFontSize(30);
    };

    const changeFont = (size) => {
        let isnum = /^\d+$/.test(size);
        if (isnum === true) setFontSize(size);
        else setFontSize(30);
    };

    return (
        <div className="App">
            <Header
                fontSize={fontSize}
                fontColor={fontColor}
                likesCount={likesCount}
            />
            <div className="row">
                <SidePanel
                    inputFontSize={inputFontSize}
                    inputFontColor={inputFontColor}
                    setInputFontColor={setInputFontColor}
                    setInputFontSize={setInputFontSize}
                    fontSize={fontSize}
                    changeStyle={changeStyle}
                    fontColor={fontColor}
                    sizeRef={sizeRef}
                    colorRef={colorRef}
                />
                <Main fontSize={fontSize} fontColor={fontColor} />
            </div>
            <Footer
                likesCount={likesCount}
                setLikesCount={setLikesCount}
                changeFont={changeFont}
                fontSize={inputFontSize}
                sizeRef={sizeRef}
                inputFontSize={inputFontSize}
            />
        </div>
    );
}

export default App;
