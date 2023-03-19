import { useEffect, useState } from 'react';
import './App.css';
import data from './data.js';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
function App() {

  const [index, setIndex] = useState(0)

  useEffect(() => {
    const lastIndex = data.length - 1;
    if(index < 0) {
      setIndex(lastIndex)
    }
    if(index > lastIndex){
      setIndex(0)
    } 

  }, [index])


  useEffect(() => {
    let autoSlide = setInterval(() => {
      setIndex(index + 1)
    }, 5000)

    return () => {
      clearInterval(autoSlide)
    }
  }, [index])

  return (
    
    <div className="section section-center">
        {
          data.map((person, personIndex) => {
            let position = 'nextSlide';
              if (personIndex === index) {
                position = 'activeSlide';
              }
              if (
                personIndex === index - 1 ||
                (index === 0 && personIndex === data.length - 1)
              ) {
                position = 'lastSlide';
              }
            return (
              <article className={position}
              key={person.id}>
                
                <img className='person-img' src={person.image} alt="" />                
                <h4>{person.name}</h4>
                <p className='title'>{person.title}</p>
                <p className="text">
                  {person.quote}
                </p>
                <FaQuoteRight className='icon'/>
              </article>
             
            )
          })
        }
        <button className="prev" onClick={() => setIndex(index - 1)}> <FiChevronLeft /> </button>
        <button className="next" onClick={() => setIndex(index + 1)}> <FiChevronRight /> </button>
    </div>
      

    
  );
}

export default App;
