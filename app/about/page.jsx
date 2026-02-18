import Image from 'next/image'
import React from 'react'
import AboutUs from '../components/about/AboutUs'
import MissionVision from '../components/about/MissionVision'
import FAQ from '../components/about/Faq'

export const metadata = {
  title: "About Us | Sri Balaji Homes",
  description: "Learn more about Sri Balaji Homes, our mission, vision, and values.",
};

export default function AboutPage() {
  return (
   <div className='lg:py-40 '>
    <AboutUs/>
    <MissionVision/>
    <FAQ/>
   </div>
  )
}
