import React from 'react';

const MovieCastCard = ({name,imgName,characterName,link}) =>{
    return(
        <>
        <a href={`../actor/explore/${link}`} style={{textDecoration:'none'}} className="castCardMainDiv d-flex flex-column justify-content-center justify-content-lg-start align-items-lg-start align-items-center">
            <div className="imageDiv d-flex justify-content-center align-items-center mb-1">
                 <img src={require(`../../assets/${imgName}`).default} alt="cast" className="img-fluid" />
            </div>
            <span className="font-weight-bold name">{name}</span>
            <span className="characterName">as {characterName}</span>
        </a>
        </>
    )
}
export default MovieCastCard;