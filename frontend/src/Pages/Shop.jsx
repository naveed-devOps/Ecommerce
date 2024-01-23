import React from "react";
import Hero from "../Components/Hero/Hero";
import Popular from '../Components/Popular/Popular'
import Offers from "../Components/Offers/Offres";
import NewCollections from "../Components/NewCollectons/NewCollections";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
 

const Shop = () => {
    return (
        <div>
            <Hero />
            <Popular />
            <Offers />
            <NewCollections />
            <NewsLetter />
             
        </div>
    );
};

export default Shop;