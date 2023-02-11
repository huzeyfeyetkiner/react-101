

function List({contacts}){

    

    return(
        <>      
            <ul>
                {contacts.map((contact, i) => <div key={i}>{contact.fullName} - {contact.phone}</div> ) }    
            </ul>  
                
        </>
    )
}

export default List