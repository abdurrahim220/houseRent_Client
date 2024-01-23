import React from 'react'
import Banner from '../Banner/Banner'
import Search from '../Search/Search'
import PropertyList from '../PropertyList/PropertyList'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Search/>
      <PropertyList/>
    </div>
  )
}

export default Home