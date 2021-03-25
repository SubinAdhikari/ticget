import React from 'react';
import movie from '../../assets/movie1.jpg'

const MovieListCard = ({slug,redirectLink,imgName,name}) =>{
    return(
        <>
        <a href={`..${redirectLink}${slug}`} style={{textDecoration:'none'}} className="col-lg-2 col-md-2 col-6 movieListCardMainDiv d-flex justify-content-center align-items-center p-0">
            <div className="innerDiv col-11 d-flex flex-column justify-content-center align-items-center p-0">
                <div className="imageDiv w-100">
                    <img src={require(`../../assets/${imgName}`).default} alt="img" className="img-fluid" />
                </div>
                <div className="descDiv w-100 d-flex justify-content-center align-items-center">
                    <span className="pl-1">{name}</span>
                </div>
            </div>
        </a>
        </>
    )
}
export default MovieListCard;