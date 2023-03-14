import { useState } from "react"

function Accordion({title, answer}) {    

    const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="accordion-container">

        <div className="accordion-item">
                    <div className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
                        <span className="question">{title}</span>
                        <span className="btn-container" >{isOpen ? "-" : "+"}</span>
                    </div>
                {
                    isOpen &&
                    <div className="accordion-content">{answer}</div>
                }
        </div>

        
        
       

        

        
    </div>
  )
}
export default Accordion