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
                            <button>Edit</button>
                            <button>Delete</button>
                        </div>
                    </li>
                )
                
            })
        }
    </ul>
  )
}
export default List