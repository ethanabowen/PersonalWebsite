import React from 'react';
//import './Peronsal.css';


function Personal(props) {
    return (
        <div className={"row " + props.className}>
            <div className="col-6">
                <img src="https://avatars1.githubusercontent.com/u/1947151?s=400&u=19cf3879633d99fadb1e10a8601af0c07f5a2e27&v=4" width="200px" height="200px" />
            </div>
            <div className="col-3 text-center">
                <div>{props.name}</div>
                <div>Email: {props.email}</div>
                <div>{props.whoAmI}</div>
            </div>
            
        </div>
    );
}

export default Personal;
