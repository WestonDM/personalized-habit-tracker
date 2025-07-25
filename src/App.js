import "./App.css";
import Login from "./Login";
import Header from "./Header";
import { useState } from "react";

function App() {
    const [h1Txt, setH1Txt] = useState("Welcome to the Habit Tracker");
    const [h2Txt, setH2Txt] = useState("Please log in to continue");
    const [formVisible, setFormVisible] = useState(true);
    const [username, setUsername] = useState("");

    // Function to update headline text
    const updateHeaderTxt = (newH1Text, newH2Text, newUsername) => {
        setH1Txt(newH1Text);
        setH2Txt(newH2Text);
        setUsername(newUsername);
        setFormVisible(false); // Hide the form after login
    };

    return (
        <div className="main">
            <div className="container">
                <Header
                    h1Headline={h1Txt}
                    h2Headline={h2Txt}
                    username={username}
                />
            </div>
            <div className="container">
                {formVisible ? (
                    <Login onHTxtChange={updateHeaderTxt} username={username} />
                ) : null}
            </div>
        </div>
    );
}

export default App;
