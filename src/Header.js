export default function Header({ h1Headline, h2Headline }) {
    return (
        <div className="header">
            <header>
                <h1>{h1Headline}</h1>
                <h2>{h2Headline}</h2>
            </header>
        </div>
    );
}
