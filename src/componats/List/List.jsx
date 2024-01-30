const List = ({menu , name})=>{

    console.log("props" , menu);

    return(
        <div>
           <h2>
                {
                    name
                }
           </h2>
            <ul>
                {
                    menu.map((m)=>{
                        return(
                            <li>
                                {
                                    m
                                }
                            </li>
                        )
                    })
                }
            </ul>


        </div>

    )

}

export default List; 