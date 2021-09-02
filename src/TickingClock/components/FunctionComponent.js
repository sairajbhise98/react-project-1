import { useState } from "react";
import React from "react";
import "./FunctionComponent.css";

const FunctionComponent = () => {

    let time = new Date().toLocaleTimeString();

    const [cTime , setCTime] = useState(time);

    const UpdateTime = () => {
        time = new Date().toLocaleTimeString();
        setCTime(time);
    }

    setInterval(UpdateTime , 1000);
    return (
        <div>
            <h2>
                Using Function Component :
            </h2>
            <h1>
            {cTime}
            </h1>
        </div>
    );
}

export default FunctionComponent;