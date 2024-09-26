

import React from 'react'
import MainCarousel from '../Components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../Components/HomeCarousel/HomeSectionCarousel/HomeSectionCarousel'
import { mens_kurta } from '../../Data/Mens_kurta'
import Footer from '../Components/Footer/Footer'


function HomePage() {
  return (
    <div>
       <MainCarousel/>

      <div className=' py-10 space-y-10 flex flex-col justify-center'>
        <HomeSectionCarousel data={mens_kurta} section_name={"Men's Kurta"}/>

        <HomeSectionCarousel data={mens_kurta} section_name={"Men's Shoes"}/>

        <HomeSectionCarousel data={mens_kurta} section_name={"Men's Shirts"}/>
        
        <HomeSectionCarousel data={mens_kurta} section_name={"Women's Saree"}/>

        <HomeSectionCarousel data={mens_kurta} section_name={"Women's Dress"}/>
      </div>

      
    </div>
    
  )
}

export default HomePage
