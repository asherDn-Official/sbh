import Image from 'next/image'
import React from 'react'
import AboutUs from '../components/about/AboutUs'
import MissionVision from '../components/about/MissionVision'
import FAQ from '../components/about/Faq'

export default function AboutPage() {
  return (
   <div className='lg:py-40 '>
    <AboutUs/>
    <MissionVision/>
    <FAQ/>
   </div>
  )
}
