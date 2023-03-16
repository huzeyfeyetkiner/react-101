function Tour({tour}) {
  return (
    <div className="card-container">
      <div className="img-container">
        <span className="price">${tour.price}</span>
        <img src={tour.image} alt="" />
      </div>
      <h2>{tour.name}</h2>
      <span className="tour-info">{tour.info}</span>
      <button className="delete">Not Interested</button>
    </div>
  )
}
export default Tour