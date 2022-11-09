import React from "react";
import Login from "./login";
import Post from "./post";

let e = React.createElement;

export default class NewsFeed extends React.Component {
    render() {
        return (
            <div className="container">
                <Login />
                <Post />
                <Post />
                <Post />
            </div>
        )
    }
}