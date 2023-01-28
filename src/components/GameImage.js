import "../styles/GameImage.css";

function GameImage(props) {

    return <div className="game-image">
    <img alt="Marvel Characters (Where's Waldo Style)" src="./imgs/marvelCharacters.jpg" onClick={props.clickFunction}/>
    </div>;

}

export default GameImage;