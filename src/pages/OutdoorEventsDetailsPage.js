import React, { useEffect,useState } from 'react';
import MovieDesc from '../components/DetailsPage/MovieDesc';
import MovieImgCard from '../components/DetailsPage/MovieImgCard';
import OutDoorEventsData from '../DummyData/OutDoorEvents';
import BreadcrumbComponent from '../components/common/BreadcrumbComponent';

const OutdoorEventsDetailsPage = () =>{
    const [slugState,setSlugState]=useState('');
    const [eventsDetailsState,setEventsDetailsState]=useState();
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        const url = window.location.href
        const slug = url.split("/").pop();
        setSlugState(slug);
        getDetailsFromSlug();
        eventsDetailsState ?   setLoading(false) : setLoading(true); 
    },[slugState])

    const getDetailsFromSlug = () =>{
        const eventsDetails =
        OutDoorEventsData.filter((data) => {
        return (
            data.slug == slugState
        );
    });
    setEventsDetailsState(eventsDetails)
    }

    return(
        <>
        {
            loading
            ?
            <span>Loading...</span>
            :
            <>
            <BreadcrumbComponent from="Home" fromHref="/" to={eventsDetailsState[0].name}/>
            <div className="container-fluid mb-3">
                <div className="row">
                    <div className="col-12 detailsPageHeroSection d-flex justify-content-center align-items-center">
                        <div className="col-lg-2 col-12">
                            <MovieImgCard na="yes" movieData={eventsDetailsState[0]}/>
                        </div>
                        <div className="col-lg-10 col-12">
                        <MovieDesc movieData={eventsDetailsState[0]} outdoorevents="true"/>
                        </div>
                    </div>
                </div>
            </div>

            {/* About Movie */}
            <div className="container-fluid px-lg-5 px-sm-2 mb-2 d-flex justify-content-lg-start justify-content-center align-items-lg-start align-items-center">
                <div className="row col-lg-9 col-12 d-flex flex-column">
                    <div className=" d-flex flex-column sectionHeader my-2">
                        About the event
                    </div>
                    <div className=" d-flex flex-column  sectionDesc pb-4">{eventsDetailsState[0].details.aboutEvents}</div>
                </div>
            </div>
            {/* About Movie Ends */}

            </>
        }
        
        </>
    )
}
export default OutdoorEventsDetailsPage;