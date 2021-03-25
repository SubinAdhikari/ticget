import React from 'react';

const CategoryCard = ({id,imgName}) =>{
    return(
        <>
        <a href="#" className="categoryCardMainDiv d-flex justify-content-center align-items-center" style={{textDecoration:'none'}}>
            <div className="imgDiv d-flex justify-content-center align-items-center">
                <img src={require(`../../assets/${imgName}`).default} alt="catName" className="img-fluid"/>
            </div>
        </a>
        </>
    )
}
export default CategoryCard;