import React from 'react';
import ExclusiveDealCard from "../../components/layout/ExclusiveDealCard";
import PopularCategories from '../../components/layout/PopularCategories';
import StatsSection from '../../components/layout/StatsSection';
export default function Home() {
  return (
    <>
      <ExclusiveDealCard />
       <PopularCategories />
       <StatsSection />
    </>
  )
}
