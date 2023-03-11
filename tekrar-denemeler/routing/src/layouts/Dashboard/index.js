import { Outlet } from "react-router-dom"
import Header from "../../components/Header"
function DashBoardLayout() {
  return (
    <div>
        
        <Header />

        <div className="content">
            <Outlet />
        </div>
    </div>
  )
}
export default DashBoardLayout