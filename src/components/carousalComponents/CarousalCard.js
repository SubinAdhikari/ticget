import React from 'react';
import image from '../../assets/carousal1.jpg';
import image2 from '../../assets/carousal2.jpg';
import image3 from '../../assets/carousal3.jpg';


const CarousalCard = () =>{
    return(
        <>
        <div className="col-12 carousalCardMainDiv p-0">
            <img src={image} alt="carousal_card" className="img-fluid"/>
        </div>
        <div className="col-12 carousalCardMainDiv p-0 ">
            <img src={image2} alt="carousal_card" className="img-fluid"/>
        </div>
        <div className="col-12 carousalCardMainDiv p-0 ">
            <img src={image3} alt="carousal_card" className="img-fluid"/>
        </div>
        </>
    )
}
export default CarousalCard;