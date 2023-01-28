import "../styles/Header.css";

function Header({foundAntMan, foundDaredevil, foundDeadpool, leaderboardFunction}) {

    return <header>
        <h1>WHERE ARE THE HEROES?</h1>
        <div className="leaderboard">
            <button onClick={leaderboardFunction}>SEE LEADERBOARD</button>
        </div>
        <div className="targets">
            LEFT: 
            {foundAntMan ? <div className="char char-found antman"></div> : <div className="char antman"></div>}
            {foundDaredevil ? <div className="char char-found daredevil"></div> : <div className="char daredevil"></div>}
            {foundDeadpool ? <div className="char char-found deadpool"></div> : <div className="char deadpool"></div>}
        </div>
        <div className="timer">
            00:00
        </div>
    </header>;

}

export default Header;