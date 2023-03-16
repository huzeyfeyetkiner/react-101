import Tour from "./Tour.js"


function Tours({tourList}) {

  return (

    <div>
      <h1>Our Tours</h1>
      <div className="tour-cards">
        {
          tourList.map((item) => {
            return(
              <Tour tour={item} key={item.id}/>      
            )
          })
        }
      </div>
      
    </div>
  )
}
export default Tours