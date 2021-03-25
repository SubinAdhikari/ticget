import React from 'react';

const MovieImgCard = ({na,movieData}) =>{
    return(
        <>
        <div className="col-12 d-flex flex-column justify-content-center align-items-center detailsPageMovieCard p-0 my-2">
            <div className="imgDiv w-100 d-flex justify-content-center align-items-center">
                <img src={require(`../../assets/${movieData.imgName}`).default} alt="movie" className="img-fluid"/>
            </div>
            <div className="releaseDateDiv w-100 d-flex justify-content-center align-items-center" 
            style={na ? {background:'#b50000'} : {background:'#333333'}}
            >
                {movieData.releaseDate}
            </div>
        </div>
        </>
    )
}
export default MovieImgCard; 