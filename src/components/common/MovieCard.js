import React from 'react';
import Badge from 'react-bootstrap/Badge';

const MovieCard = ({name,genera,imgName,redirectLink,differentBackground,slug,remainingTickets}) =>{
    return(
        <>
                <a href={`${redirectLink}${slug}`} className="d-flex flex-column justify-content-center align-items-center movieCardMainDiv" style={{textDecoration:'none'}}>
                    {/* <div className="d-flex flex-column justify-content-center align-items-center movieCardMainDiv"> */}
                        <div className="imageDiv">
                            <img src={require(`../../assets/${imgName}`).default} className="img-fluid" alt={name}/>
                            {
                                remainingTickets === 0
                                ?
                                <Badge variant="danger mr-lg-3 mt-lg-3 mt-2 mr-3" style={{position:'absolute',top:'0',right:'0'}}>SOLD OUT</Badge>     
                                :
                                ('')
                            }
                        </div>
                        <div className="d-flex flex-column justify-content-start align-items-start descDiv py-2">
                            <span 
                            className="movieName mb-1"
                            style={differentBackground ? {color: 'white'} : {color: '#333333'} }
                            >
                                {name}
                            </span>
                            <span className="movieGenera"
                            style={differentBackground ? {color: 'white'} : {color: 'grey'} }
                            >
                                {genera}
                            </span>
                        </div>
                    {/* </div> */}
                </a>
        </>
    )
}
export default MovieCard;