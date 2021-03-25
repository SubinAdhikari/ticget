import React from 'react';
import Badge from 'react-bootstrap/Badge'

const CategoryHeader = ({ textColor = '#333333', primaryTitle, badgeTitle, secondaryTitle, redirectLink, bgColor=''}) => {
    return (
        <>
            <div className="container-fluid  categoryHeaderMainDiv py-2" style={{background:bgColor}}>
                <div className="row">
                    <div className="col-12 d-flex justify-content-between align-items-center">

                        <div className="d-flex flex-column">
                            <span className="primaryTitle"  
                            // style={{color: textColor }}
                            style={bgColor ? {color: 'white'} : {color: textColor} }
                            >
                                {primaryTitle}
                            <Badge className="BadgeTitle" variant="danger ml-2">{badgeTitle}</Badge>
                            </span>
                            <span className="secondaryTitle"
                            //  style={{ color: textColor }}
                             style={bgColor ? {color: 'white'} : {color: textColor} }
                             >{secondaryTitle}</span>
                        </div>

                        <div className="d-flex justify-content-center align-items-center">
                            <a href={redirectLink} className="seeAllLink">{`See All > `} </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CategoryHeader;