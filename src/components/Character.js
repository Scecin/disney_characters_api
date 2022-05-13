import React from "react";

const Character = ({character, onCharacterClick }) => {

    const handleClick = (() => {
        onCharacterClick (character)
    })

    return (

        <div className="links">
            <li onClick={handleClick}>
                {character.name}
            </li>
        </div>
    )
}

export default Character;