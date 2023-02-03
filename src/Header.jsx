import React from "react"

export default function Header(){
    return (
        <div className="header--container">
            <div className="title--wrapper">
                <img className="header--icon" src="./src/moon-img.png" />
                <h1 className="header--title">MoonToken (ERC20)</h1>
            </div>
        </div>
    )
}