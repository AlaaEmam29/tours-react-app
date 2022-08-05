import React from 'react'

export default function Tour({name,info,image ,price,id,removeTours}) {
    const [seeMore,setSeeMore]= React.useState(false)

  return (
    <article className='tour'>
    <img src={image} alt={name}  />
    <footer>    
    <div className="tour-info">
    <h4>{name}</h4>
    <h5 className="price">{price}$</h5>
    </div>
    <p>{seeMore ? info : `${info.substring(0,200)}...`}
    <button onClick={()=>setSeeMore(!seeMore)}>{seeMore ? "Show Less" : 'See More '}</button>
    </p>

<button className="btn-delete" onClick={()=>removeTours(id)}> not interested</button>
    </footer>
    </article>
  )
}
