import { useState } from "react"

function Tour({tour, removeTour}) {

  const [readMore, setReadMore] = useState(false)

  return (
    <div className="card-container">
      <div className="img-container">
        <span className="price">${tour.price}</span>
        <img src={tour.image} alt="" />
      </div>

      <div className="info-container">
        <h2>{tour.name}</h2>
        <span className="tour-info">{readMore ? tour.info : `${tour.info.substring(0,200)}...`}

        <button className="btn-show" onClick={() => setReadMore(!readMore)}>{readMore ? "show less": "read more"}</button>
        </span>
        <button onClick={() => removeTour(tour.id)} className="delete">Not Interested</button>
      </div>
      
    </div>
  )
}
export default Tour