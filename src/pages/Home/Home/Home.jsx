import React from 'react'
import Banner from '../Banner/Banner'
import Search from '../Search/Search'
import PropertyList from '../PropertyList/PropertyList'
import FeaturedProperty from '../FeaturedProperty/FeaturedProperty'

const Home = () => {
  return (
    <div>
      <Banner/>
      <FeaturedProperty/>
      <Search/>
      <PropertyList/>
    </div>
  )
}

export default Home