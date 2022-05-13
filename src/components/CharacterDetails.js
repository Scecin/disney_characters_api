import React from "react";

const CharacterDetails = ({selectedCharacter}) => {

    return (
        <div className="details">
            <h2>{selectedCharacter.name}</h2>
            <img id="img" src={selectedCharacter.imageUrl}/>
            {selectedCharacter.films.length !== 0 ? <h3>Films</h3> : null}
            <p>{selectedCharacter.films}</p>
            {selectedCharacter.shortFilms.length !== 0 ? <h3>Short Films</h3> : null}
            <p>{selectedCharacter.shortFilms}</p>
            {selectedCharacter.tvShows.length !== 0 ? <h3>TV Shows</h3> : null}
            <p>{selectedCharacter.tvShows}</p>
        </div>
    )
}

export default CharacterDetails;