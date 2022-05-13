import React, { useEffect, useState } from "react";
import DisneyList from "../components/DisneyList";
import CharacterDetails from "../components/CharacterDetails";

const DisneyContainer = () => {

    const [characters, setCharacters] = useState([])
    const [selectedCharacter, setSelectedCharacter] = useState(null)

    useEffect(() => {
        getCharacters();
    }, [])

    const getCharacters = (() => {
        fetch("https://api.disneyapi.dev/characters")
        .then(res => res.json())
        .then(characters => setCharacters(characters.data))
        .catch(err => console.error)
    })

    const onCharacterClick = ((character) => {
        setSelectedCharacter(character)
    })

    return (
        <div className="container">
            <DisneyList characters={characters} onCharacterClick={onCharacterClick}/>
            {selectedCharacter ? <CharacterDetails selectedCharacter={selectedCharacter}/> : null}
        </div>
    )

}

export default DisneyContainer;