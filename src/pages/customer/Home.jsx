import React from 'react';
import ExclusiveDealCard from "../../components/home/ExclusiveDealCard";
import PopularCategories from '../../components/home/PopularCategories';
import StatsSection from '../../components/home/StatsSection';
import Hero from '../../components/home/Hero'
import Benefits from "../../components/home/Benefits"
import AboutUs from '../../components/home/AboutUs'
import Footer from '../../components/layout/Footer';
import PopularRestaurants from '../../components/home/PopularRestaurant';
import PersonalisedSection from '../../components/home/PersonalisedSection';
export default function Home() {
  return (
    <>
     <Hero/>
      <ExclusiveDealCard />
       <PopularCategories />
         <PopularRestaurants />
         <PersonalisedSection />
        <Benefits/>
        <AboutUs/>
      
       <StatsSection />
       <Footer /> 
    </>
  )
}
