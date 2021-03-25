import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';

import CarousalCard from './CarousalCard';

const CardOwlCarousal = () =>{
    const state= {
        responsive:{
            0: {
                items: 1.5,
            },
            450: {
                items: 1.5,
            },
            600: {
                items: 1.5,
            },
            1000: {
                items: 1.5,
            },
        },
    }
    return(
        <>
        <div className="container-fluid  cardOwlCarousalMainDiv my-2">
                <div className="row">
                <OwlCarousel className='owl-theme'
                    items={1.5}
                    autoplay={true}
                    nav={true}
                    dots={false}
                    loop={true}
                    responsiveClass={true}
                    responsive={state.responsive}
                    autoplayHoverPause={true}
                    margin={10}
                    >
                        {/* {
                            MovieData.map((data,index)=>( */}
                                    <CarousalCard/>
                        {/* //     ))
                        // } */}

                </OwlCarousel>     

                </div>
        </div>
        </>
    )
}
export default CardOwlCarousal;