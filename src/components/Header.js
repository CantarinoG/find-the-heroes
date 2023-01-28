import "../styles/Header.css";

function Header() {

    return <header>
        <h1>WHERE ARE THE HEROES?</h1>
        <div className="leaderboard">
            <button>SEE LEADERBOARD</button>
        </div>
        <div className="targets">
            LEFT: 
            <div className="char antman"></div>
            <div className="char daredevil"></div>
            <div className="char deadpool"></div>
        </div>
        <div className="timer">
            00:00
        </div>
    </header>;

}

export default Header;