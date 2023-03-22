import { useList } from "../context/ListContext"

function List() {

    // context içerisinden component içinde lazım olan değerler/stateler.
    const { list, setList, setEdit, setEditID } = useList()

  return (  
    <ul className="list">
        {
            list.map((item, index) => {
                // tamamlanan ve tamamlanmamış kısımları ayırmak için if bloğu ile koşullu render işlemi yapıldı
                if(item.completed === false) {
                    return(
                        <li key={index}>
                            <div className="list-item">

                                <input type="checkbox" name="" id="" onChange={() => {
                                    const newArray = list;
                                    newArray[index].completed = true 
                                    setList([...newArray])
                                }} checked={false}/>

                                <span>{item.title}</span>
                                <div className="buttons">
                                    <button 
                                    className="btn-edit"
                                    onClick={() => {
                                        setEdit(prev => !prev)
                                        setEditID(index)
                                    }}
                                    >Edit</button>

                                    <button 
                                    className="btn-del"
                                    onClick={() => {
                                        const newArray = list;
                                        newArray.splice(index,1)
                                        setList([...newArray])
                                    }}>Delete</button>
                                </div>
                                
                            </div>
                        </li>
                    )
                }else{
                    return(
                        <li key={index}>
                            <div className="list-item completed">

                                <input type="checkbox" name="" id="" onChange={() => {
                                    const newArray = list;
                                    newArray[index].completed = false 
                                    setList([...newArray])
                                }} checked={true}/>

                                <span>{item.title}</span>

                                <div className="buttons">
                                    <button 
                                    className="btn-edit" 
                                    onClick={() => {
                                        setEdit(prev => !prev)
                                        setEditID(index)
                                    }}
                                    disabled>Edit</button>
                                    <button 
                                    className="btn-del"
                                    onClick={() => {
                                        const newArray = list;
                                        newArray.splice(index,1)
                                        setList([...newArray])
                                    }} disabled>Delete</button>
                                </div>
                                
                            </div>
                        </li>
                    )
                }
                
                
            })
        }
    </ul>
  )
}
export default List