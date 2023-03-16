import reviews from '../data';
import {useState} from "react"
import {FaChevronLeft, FaChevronRight, FaQuoteLeft} from "react-icons/fa"


function Review() {

    const [id, setId] = useState(0)

  return (
    <div className='review-container'>

        <div className="img-container">
            <div className="quote">
             <FaQuoteLeft />
            </div>
            <img src={reviews[id].image} alt="" />
        </div>

        <p className='name'>{reviews[id].name}</p>
        <p className="title">{reviews[id].job.toUpperCase()}</p>
        <p className="text">{reviews[id].text}</p>

        <div className="buttons">
            <button className='btn-change' onClick={() => setId(prevState => prevState >= 1 ? prevState - 1 : 3)}> <FaChevronLeft /> </button>
            <button className='btn-change' onClick={() => setId(prevState => prevState < 3 ? prevState + 1 : 0)}> <FaChevronRight /> </button>
        </div>

        <div onClick={() => {
            setId(Math.floor(Math.random() * 4))
        }} className="btn-suprise">Suprise Me</div>
        
        
    </div>
  )
}
export default Review