import { useList } from "../context/ListContext"

function List() {

    const { list } = useList()

  return (
    <ul className="list">
        {
            list.map((item, index) => {
                return(
                    <li key={index}>
                        <div className="list-item">
                            <input type="checkbox" name="" id="" />
                            <span>{item.title}</span>
                            <div className="buttons">
                                <button className="btn-edit">Edit</button>
                                <button className="btn-del">Delete</button>
                            </div>
                            
                        </div>
                    </li>
                )
                
            })
        }
    </ul>
  )
}
export default List