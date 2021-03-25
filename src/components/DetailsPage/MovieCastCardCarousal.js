import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import MovieCastCard from './MovieCastCard';

const MovieCastCardCarousal = ({bgColor='',Moviedata}) =>{
    const state= {
        responsive:{
            0: {
                items: 1.5,
            },
            450: {
                items: 2.5,
            },
            600: {
                items: 3.5,
            },
            1000: {
                items: 3.2,
            },
        },
    }
    return(
        <>
        {/* <div className="container-fluid  movieCastCardCarousalMainDiv mb-2"  style={{background:bgColor}}>
                <div className="row"> */}
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
                            Moviedata.map((data,index)=>(
                                    <MovieCastCard key={index} name={data.name} characterName={data.as} imgName={data.imgName} link={data.href}/>
                            ))
                        }
                </OwlCarousel>     

                {/* </div>
        </div> */}
        </>
    )
}
export default MovieCastCardCarousal;