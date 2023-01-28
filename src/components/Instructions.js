import "../styles/Instructions.css";

function Instructions() {

    return <div className="instructions">
        <h1>Hello, hero!</h1>
        <p>In this image, there are lots of superheroes.<br/>
        Your goal is to find:
        </p>
        <div className="instructions-targets">
            <div className="target-card">
                <div className="pic antman"></div>
                <p>Ant-Man</p>
            </div>
            <div className="target-card">
                <div className="pic daredevil"></div>
                <p>Daredevil</p>
            </div>
            <div className="target-card">
                <div className="pic deadpool"></div>
                <p>Deadpool</p>
            </div>
        </div>
    </div>

}

export default Instructions;