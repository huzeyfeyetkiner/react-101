import { useNavigate, Outlet } from "react-router-dom"


function MainLayout() {

    const navigate = useNavigate()

  return (
    <div>
        <div className="nav">
            <ul>
                <li onClick={() => navigate("/")}>Accordion</li>
                <li onClick={() => navigate("/challenge")}>Challenge</li>
            </ul>
        </div>

        <div className="content">
            
            <Outlet />
           
            
        </div>
        
    </div>
  )
}
export default MainLayout