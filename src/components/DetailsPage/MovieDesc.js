import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

const MovieDesc = ({movieData,outdoorevents}) =>{
    const [btnStatus,setBtnStatus]=useState(false)
    useEffect(()=>{
        movieData.remainingTickets === 0 ? setBtnStatus(true) : setBtnStatus(false)
    },[])
    return(
        <>
        {/* <div className="container-fluid movieDescMain bg-danger h-100">
            <div className="row"> */}
                <div className="col-12 d-flex flex-column justify-content-center contentDiv p-0">
                    <span className="movieName my-1">{movieData.name}</span>
                    <div className="d-flex  col-12 flex-wrap p-0 my-1">
                        {
                            outdoorevents === 'true'
                            ?
                            ('')         
                            :
                            movieData.keywords.map((data,index)=>(
                                <a href={`explore/${data.href}`} className="keywords m-1 col-lg-1 col-5 d-flex justify-content-center align-items-center font-weight-bold">{data.keyword}</a>
                            ))
                        }                        
                    </div>
                    {
                       outdoorevents === 'true'
                       ?
                       <>
                       <span className="durationText my-1">{`Event Location : - ${movieData.location}`}</span>
                       <span className="durationText my-1">{`Event Date : - ${movieData.eventDate}`}</span>
                       </>
                       :
                       <span className="durationText my-1">{`${movieData.duration} . ${movieData.genera}`}</span>
                    }
                        <Button className="col-lg-2 col-12 bookingBtn my-1" disabled={btnStatus} onClick={()=>alert(`Congratulation you have booked tickets of ${movieData.name} and it's id is ${movieData.id}`)}>
                            {
                                 movieData.remainingTickets === 0
                                 ?
                                 `Sold Out`
                                 :
                                 `Book ticket`
                            } 
                        </Button>
                        
                </div>
            {/* </div>
        </div> */}
        </>
    )
}
export default MovieDesc;