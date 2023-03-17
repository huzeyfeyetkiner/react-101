function MenuItem({item}) {
  return (
    <div className="menu-item-container">
        <div className="img-container">
            <img src={item.img} alt="" />
        </div>
        <div className="menu-context">
            <div className="context-header">
                <h1>{item.title}</h1>
                <button className="btn-price">${item.price}</button>
            </div>

            <p className="desc">{item.desc}</p>
            
            
        </div>
    </div>
  )
}
export default MenuItem