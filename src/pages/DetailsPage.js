import React, { useEffect,useState } from 'react';
import MovieDesc from '../components/DetailsPage/MovieDesc';
import MovieImgCard from '../components/DetailsPage/MovieImgCard';
import movieData from '../DummyData/MovieData';
import MovieCastCardCarousal from '../components/DetailsPage/MovieCastCardCarousal';
import BreadcrumbComponent from '../components/common/BreadcrumbComponent';

const DetailsPage = () =>{
    const [slugState,setSlugState]=useState('');
    const [movieDetailsState,setMovieDetailsState]=useState();
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        const url = window.location.href
        const slug = url.split("/").pop();
        setSlugState(slug);
        getDetailsFromSlug();
        movieDetailsState ?   setLoading(false) : setLoading(true); 
    },[slugState])

    const getDetailsFromSlug = () =>{
        const movieDetails =
        movieData.filter((movie) => {
        return (
            movie.slug == slugState
        );
    });
    setMovieDetailsState(movieDetails)
    }

    return(
        <>
        {
            loading
            ?
            <span>Loading...</span>
            :
            <>
            <BreadcrumbComponent from="Home" fromHref="/" to={movieDetailsState[0].name}/>
            <div className="container-fluid mb-3">
                <div className="row">
                    <div className="col-12 detailsPageHeroSection d-flex justify-content-center align-items-center"
                    // style={{
                    //     backgroundImage: `url(${bg1})`,
                    //     // backgroundRepeat:'no-repeat',
                    //     backgroundPosition:'right center',
                    //     // filter:`sepia(50%)`
                    // }}
                    >
                        <div className="col-lg-2 col-12">
                            <MovieImgCard na="yes" movieData={movieDetailsState[0]}/>
                        </div>
                        <div className="col-lg-10 col-12">
                        <MovieDesc movieData={movieDetailsState[0]}/>
                        </div>
                    </div>
                </div>
            </div>
            {/* About Movie */}
            <div className="container-fluid px-lg-5 px-sm-2 mb-2 d-flex justify-content-lg-start justify-content-center align-items-lg-start align-items-center">
                <div className="row col-lg-9 col-12 d-flex flex-column">
                    <div className=" d-flex flex-column sectionHeader my-2">
                        About the movie
                    </div>
                    <div className=" d-flex flex-column  sectionDesc pb-4">{movieDetailsState[0].details.aboutMovie}</div>
                </div>
            </div>
            {/* About Movie Ends */}

            {/* Casts */}
            <div className="container-fluid px-lg-5 px-sm-2 mb-2 d-flex justify-content-lg-start justify-content-center align-items-lg-start align-items-center">
                <div className="row col-lg-9 col-12 d-flex flex-column">
                    <div className=" d-flex flex-column sectionHeader my-2">
                        Cast
                    </div>
                    <div className="col-12 d-flex flex-column sectionDesc p-0 pb-4" style={{cursor:'pointer'}}>
                        <MovieCastCardCarousal Moviedata={movieDetailsState[0].casts}/>
                    </div>
                </div>
            </div>
            {/* Casts Ends */}


            {/* Crew */}
            <div className="container-fluid px-lg-5 px-sm-2 mb-2 d-flex justify-content-lg-start justify-content-center align-items-lg-start align-items-center">
                <div className="row col-lg-9 col-12 d-flex flex-column">
                    <div className=" d-flex flex-column sectionHeader my-2">
                        Crew
                    </div>
                    <div className="col-12 d-flex flex-column sectionDesc pb-4 p-0" style={{cursor:'pointer'}}>
                        <MovieCastCardCarousal Moviedata={movieDetailsState[0].crew}/>
                    </div>
                </div>
            </div>
            {/* Crew Ends */}


            

            </>
        }
        
        </>
    )
}
export default DetailsPage;