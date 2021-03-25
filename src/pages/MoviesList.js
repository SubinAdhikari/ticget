import React,{useEffect,useState} from 'react';
import MovieListCard from '../components/movieListCard/MovieListCard';
import MovieData from '../DummyData/MovieData';
import OutDoorEventsData from '../DummyData/OutDoorEvents';
import BreadcrumbComponent from '../components/common/BreadcrumbComponent';

const MoviesList = () =>{
    const [exploreState,setExploreState]=useState('');
    useEffect(()=>{
        const url = window.location.href
        const lastSegment = url.split("/").pop();
        setExploreState(lastSegment);
    },[])

    return(
        <>
        <BreadcrumbComponent from="Home" fromHref="/" to={exploreState}/>
        <div className="container-fluid  p-0" style={{overflow:'hidden'}}>
            <div className="row">
                {
                    exploreState === 'movies'
                    ?
                <div className="col-12 d-flex  flex-wrap">
                    {
                        MovieData.map((data,index)=>(
                                <MovieListCard slug={data.slug} redirectLink={data.redirectLink} imgName={data.imgName} name={data.name}/>     
                            ))
                    } 
                </div>
                    :
                    exploreState === 'premiers'
                    ?
                    <div className="col-12 d-flex  flex-wrap">
                    {
                        MovieData.map((data,index)=>{
                            return(
                                data.premiers === 'yes'  // FOR PREMIERS
                                ?
                                <MovieListCard slug={data.slug} redirectLink={data.redirectLink} imgName={data.imgName} name={data.name}/>
                                :
                                ('')
                            )
                            })
                    }
                    </div>
                    :
                    exploreState === 'out-door-events'
                    ?
                    <div className="col-12 d-flex  flex-wrap">
                        {
                            OutDoorEventsData.map((data,index)=>(
                                    <MovieListCard slug={data.slug} redirectLink={data.redirectLink} imgName={data.imgName} name={data.name}/>     
                                ))
                        } 
                    </div>
                    :
                    <div className="container-fluid d-flex justify-content-center align-items-center">
                        <span>Sorry Currently Not Available</span>
                    </div>
                }
            </div>
        </div>
        </>
    )
}
export default MoviesList;