import React from "react";

const Props = props => {

    console.log(props);
    return (
    
    <div>
        <h1>
            Hello {props.name} as {props.as}
        </h1>
        {props.Brother}
    </div>
    )
}

export default Props;