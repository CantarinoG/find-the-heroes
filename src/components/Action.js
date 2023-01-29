import "../styles/Action.css";

function Action({text, show}) {

    return <>{show ? <div className="disappear">{text}</div> : null}</>

}

export default Action;