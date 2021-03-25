import React from 'react';

const Footer = () =>{
    return(
        <>
        <div className="container-fluid footerMainDiv mt-4">
            <div className="row">
                <div className="col-12 d-flex flex-column justify-content-center align-items-center py-3">
                    <span className="brandName">TICGET</span>
                    <div className="d-flex">
                    <i className="fa fa-facebook-f"></i>
                    <i className="fa fa-instagram"></i>
                    <i className="fa fa-twitter"></i>
                    </div>
                    <span>Copyright {new Date().getFullYear()} &copy;. All Right Reserved.</span>
                </div>
            </div>
        </div>
        </>
    )
}
export default Footer;