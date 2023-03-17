function Header( {setCategory} ) {


    function handleClick(e){
        setCategory(e.target.name)
    }

  return (
    <div className="header">
        <h1 >Our Menu</h1>

        

        <div className="nav-buttons">
            <button name="all" onClick={handleClick}>All</button>
            <button name="breakfast" onClick={handleClick}>Breakfast</button>
            <button name="lunch" onClick={handleClick}>Lunch</button>
            <button name="shakes" onClick={handleClick}>Shakes</button>
        </div>
        
    </div>
  )
}
export default Header