import React from "react";
import Character from "./Character";

const DisneyList = ({characters, onCharacterClick}) => {

    const characterNodes = characters.map((character, index) => {
            return <Character character={character} key={index} onCharacterClick={onCharacterClick }/>   
    })

    return (
        <div className="list">
            <img id="title-img" src="https://logos-download.com/wp-content/uploads/2016/06/The_Walt_Disney_Studios_logo_horizontal.png"/>
            <ul>
                {characterNodes}
            </ul>
        </div>
    )
}

export default DisneyList;