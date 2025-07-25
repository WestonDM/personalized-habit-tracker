import "./App.css";
import Login from "./Login";
import Header from "./Header";
import { useState } from "react";

function App() {
    const [h1Txt, setH1Txt] = useState("Welcome to the Habit Tracker");
    const [h2Txt, setH2Txt] = useState("Please log in to continue");
    return (
        <div className="main">
            <div className="container">
                <Header h1Headline={h1Txt} h2Headline={h2Txt} />
            </div>
            <div className="container">
                <Login onH1TxtChange={setH1Txt} />
            </div>
        </div>
    );
}

export default App;
