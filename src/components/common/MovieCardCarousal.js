import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import MovieCard from './MovieCard';
import MovieData from '../../DummyData/MovieData';
import OutDoorEventsData from '../../DummyData/OutDoorEvents';

const MovieCardCarousal = ({bgColor='',premiers,outdoorEvents}) =>{
    const state= {
        responsive:{
            0: {
                items: 2.5,
            },
            450: {
                items: 3.5,
            },
            600: {
                items: 4.5,
            },
            1000: {
                items: 5.5,
            },
        },
    }
    return(
        <>
        <div className="container-fluid  movieCardCarousalMainDiv mb-2"  style={{background:bgColor}}>
                <div className="row">
                <OwlCarousel className='owl-theme'
                    // items={5}
                    autoplay={false}
                    nav={false}
                    dots={false}
                    loop={true}
                    responsiveClass={true}
                    responsive={state.responsive}
                    autoplayHoverPause={false}
                    >
                        {
                            premiers === 'yes'  //FOR PREMIERS ONLY
                            ?
                            MovieData.map((data,index)=>{
                                return(
                                    data.premiers === 'yes'
                                    ?
                                    <MovieCard key={index} differentBackground={bgColor} slug={data.slug} redirectLink={data.redirectLink} id={data.id} name={data.name} genera={data.genera} imgName={data.imgName} remainingTickets={data.remainingTickets}/>
                                    :
                                    ('')
                                )
                            })
                            :
                            outdoorEvents === 'yes' // FOR OUTDOOR EVENTS
                            ?
                            OutDoorEventsData.map((data,index)=>(
                                <MovieCard key={index} differentBackground={bgColor} slug={data.slug} redirectLink={data.redirectLink} id={data.id} name={data.name} genera={data.location} imgName={data.imgName} remainingTickets={data.remainingTickets}/>
                            ))
                            :
                            // FOR ALL MOVIES
                            MovieData.map((data,index)=>(
                                <MovieCard key={index} differentBackground={bgColor} slug={data.slug} redirectLink={data.redirectLink} id={data.id} name={data.name} genera={data.genera} imgName={data.imgName} remainingTickets={data.remainingTickets}/>
                             ))
                        }
                </OwlCarousel>     

                </div>
        </div>
        </>
    )
}
export default MovieCardCarousal;