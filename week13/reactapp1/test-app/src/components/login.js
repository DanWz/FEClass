import React from "react";


export default class Login extends React.Component {
    render() {
        return(
            <div style={{border: '5px solid blue', borderRadius: '10px'}}>
                <form>
                    <label>
                            <h3>Login</h3>
                        <input type="text" placeholder="Username"></input>
                    </label>
                    <label>
                        <input type="password" placeholder="Password"></input>
                    </label>
                    <div>
                        <br></br>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}