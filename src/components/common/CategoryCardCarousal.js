import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import CatData from '../../DummyData/CatData';
import CategoryCard from './CategoryCard';

const CategoryCardCarousal = ({bgColor=''}) =>{
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
        <div className="container-fluid  categoryCardCarousalMainDiv mb-2 pb-4"  style={{background:bgColor}}>
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
                            CatData.map((data,index)=>(
                                <CategoryCard key={index} id={data.id} imgName={data.imgName}/>
                            ))
                        }
                </OwlCarousel>     

                </div>
        </div>
        </>
    )
}
export default CategoryCardCarousal;