import Tour from "./Tour.js"


function Tours({tourList, removeTour}) {

  return (

    <div>
      <h1>Our Tours</h1>
      <div className="underline"></div>
      <div className="tour-cards">
        {
          tourList.map((item) => {
            return(
              <Tour tour={item} key={item.id} removeTour={removeTour}/>      
            )
          })
        }
      </div>
      
    </div>
  )
}
export default Tours