import "./Card.css";
import "./App.css";
import Card from "./components/Card";
import Calculator from "./components/Calculator";
function App() {
    return (
        <div>
            <h1>Słynni informatycy</h1>
            <Card
                name="Niklaus Wirth"
                specialization="Elektronik i informatyk"
                years="1934 - ?"
                country="Szwajcaria"
                link="https://mdz.cs.pollub.pl/ai/nicolas_wirth.jpg"
            />
            <Calculator />
        </div>
    );
}

export default App;
