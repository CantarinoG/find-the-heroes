import "../styles/Submit.css";

function Submit(props) {

    return <div className="submit-dialog">
        <h1> Congratulations! </h1>
        <p> You finished in {props.time}</p>
        <p> What's your name?</p>
        <input type="text" onChange={props.inputFunction}></input>
    </div>

}

export default Submit;