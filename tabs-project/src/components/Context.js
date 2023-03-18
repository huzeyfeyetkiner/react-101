import { FaAngleDoubleRight } from "react-icons/fa";

function Context({job}) {
  return (
    <div className="context-container">
        <div className="context-header">
            <span className="title">{job.title}</span>
            <span className="company">{job.company}</span>
            <span className="dates">{job.dates}</span>
        </div>
        <ul className="duties">
            {
                job.duties.map((item, index) => {
                    return(
                        <li key={index}>
                            <FaAngleDoubleRight className="icon"/> 
                            <div className="context">
                                <span>{item}</span>
                            </div>
                        </li>
                    )
                })
            }
        </ul>

    </div>
  )
}
export default Context