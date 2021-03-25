import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb'

const BreadcrumbComponent = ({from,fromHref,to}) =>{
    return(
        <>
        <Breadcrumb>
  <Breadcrumb.Item href={fromHref}>{from}</Breadcrumb.Item>
  <Breadcrumb.Item active>{to}</Breadcrumb.Item>
</Breadcrumb>
        </>
    )
}
export default BreadcrumbComponent;