import { Component } from "react";

class Quiz extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div>
                <div className="container">
                <h1 className="qn">Question</h1>
                <p>1 of 15</p>
                <p className="qn">Which is the only mammal that can jump?</p>
                <div className="options">
                    <div className="option">
                        <p>Dog</p>
                    </div>
                    <div className="option">
                        <p>Elephant</p>
                    </div>
                    <div className="option">
                        <p>Goat</p>
                    </div>
                    <div className="option">
                        <p>Lion</p>
                    </div>

                </div>

                <div className="buttons">
                    <button className="previous">Previous</button>
                    <button className="next">Next</button>
                    <button className="quit">Quit</button>
                    </div>



</div>
            </div>
        )
    }
}

export default Quiz