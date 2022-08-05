import React from 'react'
import Tour from '../Tour/Tour'

export default function Tours({ tours ,removeTours}) {
    
  return (
    <>
    <section className="tours-component">
<h1 className="section-title">Our Tours</h1>
<div className="border"></div>
{ tours.map((tour,index) => <Tour key={index} {...tour} removeTours={removeTours}/>
)}
    </section>
  
    </>
  )
}
