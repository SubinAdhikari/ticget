import React from 'react';
import CategoryCardCarousal from '../components/common/CategoryCardCarousal';
import CategoryHeader from '../components/common/CategoryHeader';
import MovieCardCarousal from '../components/common/MovieCardCarousal';

const Home = () =>{
    return(
        <>
        <CategoryHeader primaryTitle="recommended movies" redirectLink="/explore-all/movies"/>
        <MovieCardCarousal/>

        {/* <CategoryHeader primaryTitle="the best of entertainment" redirectLink="/explore-all/categories"/>
        <CategoryCardCarousal/> */}

        <CategoryHeader primaryTitle="Premiers" secondaryTitle="Brand new release every Friday" redirectLink="/explore-all/premiers" bgColor="#333545"/>
        <MovieCardCarousal bgColor="#333545" premiers="yes"/>
        
        <CategoryHeader primaryTitle="Outdoor events" badgeTitle="new" redirectLink="/explore-all/out-door-events"/>
        <MovieCardCarousal outdoorEvents="yes"/>
        </>
    )
}
export default Home