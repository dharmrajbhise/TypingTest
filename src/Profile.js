import React from "react";

class Profile extends React.Component{
    constructor()
    {
        super()
    }
    componentDidMount()
    {
        console.warn("Called life cycle")
    }

    render()
    {
        return(
            <div>
                <h1>Profile component</h1>
            </div>
        )
    }
}

export default Profile