import "../styles/Header.css";

function Header() {

    return <header>
        <h1>Where Are The Heroes?</h1>
        <div className="leaderboard">
            <button>Leaderboard</button>
        </div>
        <div className="targets">
            Left: A B C
        </div>
        <div className="timer">
            00:00
        </div>
    </header>;

}

export default Header;