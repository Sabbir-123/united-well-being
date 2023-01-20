import React from 'react';
import Banner from './Banner/Banner';
import CustomerReview from './CustomerReview/CustomerReview';
import Details from './Details/Details';
import Steps from './Steps/Steps';


const Home = () => {
    document.title= "Home"
    return (
        <div>
           <Banner></Banner>
           <Details></Details>
           <CustomerReview></CustomerReview>
           <Steps></Steps>
        </div>
    );
};

export default Home;