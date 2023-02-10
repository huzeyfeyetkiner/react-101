import { propTypes } from "prop-types"


function Header({name, surName, age, address}){
    return(
        <>        
            <h1>Merhaba {name} {surName} {age}</h1>        

            {
                 <p>{address.title} -  {address.zip}</p>
            }
        </>
    )
}

export default Header

Header.propTypes = {
    name: propTypes.string,
    surName: propTypes.string,
    age: propTypes.oneOfType([propTypes.string, propTypes.number]),
    address: propTypes.shape({
        title: propTypes.string,
        zip: propTypes.oneOfType([propTypes.string,propTypes.number])
    })
}