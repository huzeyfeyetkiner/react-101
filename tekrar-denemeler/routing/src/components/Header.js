import { Link, useNavigate } from "react-router-dom"

function Header() {

    // kendi oluşturduğum elemenlet ile Link veya NavLink kullanmadan router aracılığı ile yönlendirme yapmamı sağlayan hook.
    const navigate = useNavigate()


  return (
    <div className="header-menu">

        <ul>
            {/* navigate fonksiyonuna -1 parametresini verdiğimizde bir önceki sayfaya döner */}
            <li onClick={() => navigate(-1)}>
                geri
            </li>
            <li>
                <Link to={"/"}>Anasayfa</Link>
            </li>
            <li>
                <Link to={"users"}>Kullanıcılar</Link>
            </li>
            <li>
                <Link to={"contact"}>İletişim</Link>
            </li>
            <li onClick={() => navigate("contact")}>İletişim(test)</li>
        </ul>

    </div>
  )
}
export default Header