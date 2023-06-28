import React, {Component} from "react";

export default class Loader extends Component{
    render(){
        return(
            <div className="d-flex justify-content-center align-items-center" style={{height:"100vh",width:"100%",position:"absolute",top:"0",left:"0",zIndex:1}}>
                <div className="spinner-border text-secondary" role="status">
                </div>
            </div>
        )
    }
}