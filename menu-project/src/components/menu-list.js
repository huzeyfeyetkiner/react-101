import menu from "../data"
import MenuItem from "./menu-item"


function MenuList({category}) {  

   
    if(category === "all"){
        return (
            <div className="menu-list">
                {
                    menu.map((item) => {
                        return(
                            <MenuItem item = {item} />
                        )
                    })
                }
            </div>
          )
    }else{
        const filter = menu.filter((item) => item.category === category)
        return (
            <div className="menu-list">
                {
                    filter.map((item) => {
                        return(
                            <MenuItem item = {item} />
                        )
                    })
                }
            </div>
          )
    }



  
}
export default MenuList